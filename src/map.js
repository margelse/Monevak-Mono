// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.

function init() {
    // Создание карты.
    var map = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [52.925998, 54.741348],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 5
    });

    var myPlacemark1 = new ymaps.Placemark([55.637576, 51.819712], {}, {
        iconLayout: 'default#image',
        iconImageHref: './image/map-icons/map-point.svg',
        iconImageSize: [36, 40],
        iconImageOffset: [0, 0]
    });
    var myPlacemark2 = new ymaps.Placemark([53.214496, 63.632100], {}, {
        iconLayout: 'default#image',
        iconImageHref: './image/map-icons/map-point.svg',
        iconImageSize: [36, 40],
        iconImageOffset: [0, 0]
    });
    var myPlacemark3 = new ymaps.Placemark([53.507852, 49.420411], {}, {
        iconLayout: 'default#image',
        iconImageHref: './image/map-icons/map-point.svg',
        iconImageSize: [36, 40],
        iconImageOffset: [0, 0]
    });
    var myPlacemark4 = new ymaps.Placemark([54.629221, 39.737111], {}, {
        iconLayout: 'default#image',
        iconImageHref: './image/map-icons/map-point.svg',
        iconImageSize: [36, 40],
        iconImageOffset: [0, 0]
    });
    var myPlacemark5 = new ymaps.Placemark([52.970756, 36.064358], {}, {
        iconLayout: 'default#image',
        iconImageHref: './image/map-icons/map-point.svg',
        iconImageSize: [36, 40],
        iconImageOffset: [0, 0]
    });

    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('rulerControl');
    map.behaviors.disable('scrollZoom');

    map.geoObjects.add(myPlacemark1);
    map.geoObjects.add(myPlacemark2);
    map.geoObjects.add(myPlacemark3);
    map.geoObjects.add(myPlacemark4);
    map.geoObjects.add(myPlacemark5);
}


export { init }