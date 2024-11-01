// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.

function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [52.925998, 54.741348],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 7
    });

    var myPlacemark = new ymaps.Placemark([52.925998, 54.741348], {}, {
        iconLayout: 'default#image',
        iconImageHref: './image/map-icons/map-point.svg',
        iconImageSize: [36, 40],
        iconImageOffset: [0, 0]
    });

    myMap.geoObjects.add(myPlacemark); 
}


export { init }