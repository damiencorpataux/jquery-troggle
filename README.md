jquery-troggle
==============

Troggle lets you toggle cyclic states on dom elements, they then becom controls.

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

Easily cycle icons using css:
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

Easily create groups of controls by using common attributes:
```html
<style>
    *[data-troggle-state="off"] {
        background-color: #00BFFF;
    }
    *[data-troggle-state="on"] {
        background-color: #FF0000;
    }
</style>

<div>
   Price
   <img data-type="troggle" data-troggle-id="price-order" title="Order" src="order-icon.png">
   <img data-type="troggle" data-troggle-id="price-unit" title="Unit" src="unit-icon.png">
</div>
<div>
   Weight
   <img data-type="troggle" data-troggle-id="weight-order" title="Order" src="order-icon.png">
   <img data-type="troggle" data-troggle-id="weight-unit" title="Unit" src="unit-icon.png">
</div>

<script>
$(document).ready(function() {
    // Initializes troggles
    $('*[data-type=troggle][title=Order]').troggle({
        states:['off', 'ASC', 'DESC']
    });
    $('*[data-type=troggle][title=Group][data-troggle-id~=price]').troggle({
        states:['EUR', 'USD']
    });
    $('*[data-type=troggle][title=Group][data-troggle-id~=weight]').troggle({
        states:['kg', 'lbs']
    });
    // Retrieves control state on user click
    $('*[data-type=troggle]').on('click', function() {
        // Retrives troggles states for Price controls and Weight controls
        var states = {
            price: $('*[data-type=troggle][title=Price]').troggle('state'),
            weight: $('*[data-type=troggle][title=Weight]').troggle('state')
        }
    });
});
</script>
```
