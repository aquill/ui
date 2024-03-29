(function ($) {
    $.fn.easyCheckRadio = function () {
        $(this).each(function () {
            var checked = this.checked ? ' checked icon-on' : '',
                disabled = this.disabled ? ' disabled' : '',
                type = this.type,
                name = this.name;

            var wrapper = '<div class="checkable input-$1$2$3" id="name-$4"/>';

            wrapper = wrapper.replace('$1', type)
                .replace('$2', disabled)
                .replace('$3', checked)
                .replace('$4', name);

            $(this).wrap(wrapper).after('<i>').addClass('hidden');
        });
    };

    $('input[type=radio]').on('change', function () {
        $('input[name=' + this.name + ']').parent().removeClass('checked');
        $('input[name=' + this.name + ']').parent().removeClass('icon-on');

        if (this.checked) {
            $(this).parent().addClass('checked');
            $(this).parent().addClass('icon-on');
        }
    });

    $('input[type=checkbox]').on('change', function () {
        if (this.checked) {
            $(this).parent().addClass('checked');
            $(this).parent().addClass('icon-on');
        } else {
            $(this).parent().removeClass('checked')
            $(this).parent().removeClass('icon-on');
        }
    });

    $('input[type=radio], input[type=checkbox]').parents('label').mouseover(function() {
        $(this).find('div').addClass('hover');
    });

    $('input[type=radio], input[type=checkbox]').parents('label').mouseout(function() {
        $(this).find('div').removeClass('hover');
    });

    $('input[type=radio], input[type=checkbox]').easyCheckRadio();

    $("select").selecter();

})(typeof jQuery !== 'undefined' ? jQuery : Zepto);
