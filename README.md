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

See `example/` for more detailed usage (in typescript). Here's also a [live demo](https://ronmi.github.io/react-promise-visualizer/).

# How it works

`Visualizer` is just a `span` with only one child node, which represents the state of promise.

By passing a `Promise` object to `show()` method, `Visualizer` will inject the component whichi indicates "a promise is running", and set the `span`'s opacity to `1`.

After promise is resolved/rejected, the component is replaced by the new one which represents new state, and container's opacity is setted to 0 after a short period.

`show()` will return a new promise object.

# Available properties

`Visualizer` accepts three properties:

- `className`: The css class of the container. The container will be a `span`.
- `provider`: See next section.
- `duration`: After the promise is resolved/rejected, the visualizer will keep showing for a short period. It is controlled by this property.

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

# License

MIT and GPLv3, you must choose one explicitly, or it will default to GPLv3.

The css in default provider is copied and modified from fontello. See fontello-license.txt for more license information.