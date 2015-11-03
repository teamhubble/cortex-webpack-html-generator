# Cortex-Webpack-Html-Generator

This plugin is a post-process for index.html files.

If you deploy a webpack built SPA and you want to update.

Usually people will have a app.js file. However, this will get cached by the browser.

With Cortex-Webpack-Html-Generator you can generate a new index.html with the good filename using the hash feature of webpack. Even on incremental compile.

# How it works

1. Configure your webpack to use the plugin

```
plugins: [

  new HtmlPlugin({
    template: 'assets/index.html.tmpl',
    output_filename: 'index.html'
  });
]
```

2. Adding the plugin will provide you the following objet to inject in your blue-tmpl template

```
{ js: [ 'app_6a8f798e0ef8ca9441b1.bundle.js' ],
  map: [ 'app_6a8f798e0ef8ca9441b1.bundle.js.map' ] }
```

From there you can do so in the templates

```
{% for (var i = 0; i < js.length; ++i) { %}
    <script type="text/javascript" src="{% js[i] %}"></script>
{% } %}
```

