function init(){
    let map = new ymaps.Map('company__ymap', {
        center: [55.772930958347224,37.647259074178706],
        zoom: 15
    })
    let placeMark = new ymaps.Placemark([55.772930958347224,37.647259074178706], {
        hintContent: ``,
            balloonContent: [
                '<div id="18" class="map_card_container-two">',
                '<div class="map_card_img">',
                '<img src="images/map_card.jpg" alt="">',
                '</div>',
                '<div class="map__card_text">',
                '<p>',
                '1 трасса и троллей 62 метров в развлекательном центре «Уфа-олимпик»',
                '</p>',
                '</div>',
                '<div class="map__card_city">',
                '<p>',
                'Уфа',
                '</p>',
                '</div>',
                '<a href="" class="btn btn__background_green">',
                'Показать',
                '</a>',
                '<div class="map__card_svg">',
                            
                '</div>',
                '</div>'
            ].join('')
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/mapMark.svg',
        iconImageSize: [50, 76],
        iconImageOffset: [0, 0]
    })
    map.geoObjects.add(placeMark)
}
ymaps.ready(init)