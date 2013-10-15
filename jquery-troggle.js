/**
 * Troggle - jQuery plugin
 * @author Damien Corpataux
 */
(function($) {

    var methods = {
        init: function(options) {
            // Plugin options
            var settings = $.extend( {
                states: ['off', 'on']
            }, options);
            //
            var me = this;
            return this.each(function() {
                var $this = $(this),
                    data = $this.data('troggle');
                // Setups 'data-troggle-state' attribute
                $this.attr('data-troggle-state', settings.states[0]);
                // Binds click event
                $this.on('click.troggle', methods.toggle);
                // Setups stuff if the plugin hasn't been initialized yet
                if (!data) {
                    $this.data('troggle', {
                        settings: settings
                    });
                }
            });
        },
        destroy: function() {
            return this.each(function() {
                var $this = $(this),
                    data = $this.data('troggle');
                // TODO:
                // - remove 'data-troggle-state' attribute
                // - remove bound events
                // Namespacing FTW
                $(window).unbind('.troggle');
                $this.removeData('troggle');
            })
        },
        /**
         * Toogles next state value
         */
        toggle: function() {
            var $this = $(this),
                data = $this.data('troggle'),
                states = data.settings.states;
                current_state = $this.attr('data-troggle-state');
                next_state = states[($.inArray(current_state, states)+1)%(states.length)]
            // Toggles data-troggle-state (round robin)
            return $this.attr('data-troggle-state', next_state);
        },
        /**
         * Sets a specific state
         */
        set: function(state) {
            var $this = $(this),
                data = $this.data('troggle'),
                states = data.settings.states;
            if ($.inArray(state, states) == -1) $.error('Unknown state "'+state+'"');
            return $this.attr('data-troggle-state', state);
        },
        /**
         * Sets the first state in states list
         */
        reset: function() {
            var $this = $(this),
                data = $this.data('troggle'),
                state = data.settings.states[0];
            return $this.attr('data-troggle-state', state);
        },
        /**
         * Returns troggles states
         */
        state: function() {
            var states = {};
            this.each(function() {
                var $this = $(this),
                    id = $this.attr('data-troggle-id');
                    state = $this.attr('data-troggle-state');
                states[id] = state;
            });
            return states;
        }
    };

    /**
     * Plugin entry point
     */
    $.fn.troggle = function(options) {
        if (methods[options]) {
            // Calls the given method
            return methods[options].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if ( typeof options === 'object' || !options ) {
            // Initilizes plugin
            return methods.init.call(this, options);
        } else {
            // Method not found
            $.error('Method '+options+' does not exist');
        }
    };
})(jQuery);
