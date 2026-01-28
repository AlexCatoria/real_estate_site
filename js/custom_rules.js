// Определяем пользовательское правило onlyletter
$.validationEngine.language.all['ru'] = {
    "onlyletter": {
        "regex": /^[a-zA-Z]+$/,
        "alertText": "Поле должно содержать только буквы"
    }
};

// Добавляем правило в валидатор
$.validationEngine.buildPromptNode = function(field, error) {
    if (error.rule === 'onlyletter') {
        return 'Поле должно содержать только буквы';
    }
};

$.validationEngine.languages.ru = $.validationEngine.languages.ru || {};

$.validationEngine.languages.ru.jsValidator = {
    custom: {
        onlyletter: function(field, rules, i, options) {
            var reg = /^[a-zA-Z]+$/;
            return reg.test(field.val());
        }
    },
    custom_error_messages: {
        onlyletter: "Поле должно содержать только буквы"
    }
};