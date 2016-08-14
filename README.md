# react-promise-visualizer
A React component showing visual notification for your asynchronized works.

# Synopsis

```js
render() {
  return <Visualizer provider={new DefaultProvider} ref={c => this.v = c} />;
}

sendAJAX() {
  this.v.show($.ajax({url: "..."})).then(data => console.log(data));
}
```

See `example/` for more detailed usage (in typescript). There's also a [live demo](https://ronmi.github.io/react-promise-visualizer/).

# How it works

`Visualizer` is just a `span` with only one child node, which represents the state of promise.

By passing a `Promise` object to `show()` method, `Visualizer` will inject the component whichi indicates "a promise is running", and set the `span`'s opacity to `1`.

After promise is resolved/rejected, the component is replaced by the new one which represents new state, and container's opacity is setted to 0 after a short period.

`show()` will wrap you promise in a new promise object and returns it. The new one logically equals to old one, it does not represents the life cycle or event of visualizer.

It should be safe to call `show()` multiple times: old one will keep running, your `.then()` will be executed correctly, and only newest one can change the state of visualizer. This is done by allocating a numeric identifier for each promise object internally.

# Available properties

`Visualizer` accepts three properties:

- `className`: The css class of the container. The container will be a `span`. *optional*
- `provider`: See next section. *required*
- `duration`: How many milliseconds should visualizer keep showing after resolved/rejected. *optional, defaults to 3000*

# Provider

A provider returns react components representing state of promise. The default implementation uses svg images and css animation. You can easily write your own in seconds: it's nothing but an object with three function: `done()`, `failed()` nd `running()`, each represents a different state.

```js
var myProvider = {
  done() { return <img src="images/ok.png" />; }
  failed() { return <img src="images/error.png" />; }
  running() { return <img src="images/spin.gif" />; }
};

render() {
  return <Visualizer provider={myProvider} ref={c => this.v = c} />;
}
```

### Default provider

Since default provider is implemented using svg images, you **MUST** specify the width and height of the container(`span`). Specifying `className` is strongly recommended.

You can open live demo above, remove width/height using browser's developer tool, and see what happends.

# License

MIT and GPLv3, you must choose one explicitly, or it will default to GPLv3.

The css in default provider is copied and modified from fontello. See fontello-license.txt for more license information.