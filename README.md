jquery-troggle
==============

Troggle lets you toggle cyclic states to dom elements.

You define set of states that you assign to one or more dom elements.
When the user clicks one dom element, the state cycles through the defined states.

```html
<style>
    *[data-troggle-state="off"] {
        background-color: #00BFFF;
    }
    *[data-troggle-state="on"] {
        background-color: #FF0000;
    }
</style>

<img data-type="troggle" src="http://openiconlibrary.sourceforge.net/gallery2/open_icon_library-full/icons/png/48x48/status/battery-100.png">
<img data-type="troggle" src="http://openiconlibrary.sourceforge.net/gallery2/open_icon_library-full/icons/png/48x48/status/audio-volume-low-5.png">

<script>
    $(document).ready(function() {
    // Initializes troggles
    $('*[data-type=troggle]').troggle({
        states:['on', 'off', 'unknown']
    });
    // Retrieves control state on user click
    $('*[data-type=troggle]').on('click', function() {
        // Retrives troggles states
        console.log($(this).troggle('state'));
    });
</script>
```

Easily cycle icons using css
```html
<style>
    *[data-troggle-state="off"] {
        background-image: url(icon1);
    }
    *[data-troggle-state="on"] {
        background-color: url(icon2);
    }
    *[data-troggle-state="unknown"] {
        background-color: url(icon3);
    }
</style>
```
