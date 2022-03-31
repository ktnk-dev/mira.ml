ishelp = true


function generate_help(cmd,descr,example){
    main = document.getElementsByClassName('help')[0]
    help = document.createElement('h4')
    help.classList.add('h-back')
    help.onclick = function(){
        window.location = "/help/"
    }
    help.innerHTML = "< Назад"

    comnd = document.createElement('h3')
    comnd.classList.add('h-role')
    comnd.innerHTML = cmd

    h_descr = document.createElement('h3')
    h_descr.classList.add('h-descr')
    h_descr.innerHTML = descr

    main.appendChild(help)
    main.appendChild(comnd)

    main.appendChild(h_descr)
    if (example != undefined){

        h_example = document.createElement('div')
        h_example.classList.add('h-example')
        
        he_t = document.createElement('h3')
        he_t.classList.add('he-t')
        he_t.innerHTML = "Пример"
    
        he_r = document.createElement('h3')
        he_r.classList.add('he-r')
        he_r.innerHTML = example
    
        h_example.appendChild(he_t)
        h_example.appendChild(he_r)
        main.appendChild(h_example)
    }




}

commands = {
    Музыка:[
        [' _play','Воспроизведение песни по названию или ссылке в голосовм канале'],
        [' _pause','Пауза песни'],
        [' _skip _s', 'Пропуск песни, которая сейчас играет'],
        [' _stop','Остановка песни и выход из голосового канала'],
        [' _volume','Установка громкости от 0% до 100%']
    ],
    Развлекательные:[
        [' _prof','Мира создаст продолжение вашей истории'],
        [' _анекдот', 'Мира расскажет случайный анекдот'],
        [' _media','Мира выведет случайную картинку','?media'],
        [' _coin','Орел или Решка'],
        [' _wine', 'Конвертация 🍇 в 🍷, а так же передача 🍷 другому участнику сервера','/api/wine/']
        
    ],
    Модерация: [
        [' _role', 'Выдача ролей по этой команде', '?role'],
        [' _kick', 'Выгнать пользователя из сервера'],
        [' _ban','Забанить пользователя на сервере'],
        [' _reactions','Выдача ролей по реакции','/api/reactions/'],
        [' _webhooks','Управление вебхуками, которые создает Мира', '/api/webhooks/'],
        [' _uservoice','Вощможность создавать участникам собственные голосовые каналы','/api/uservoice/']
        
    ],
    Математика:[
        [' _random', 'Случайное число из заданого диапазона'],
        [' _calc', 'Решение обычного математического примера'],
        [' _rnum', 'Округление числа','?rnum'],
        [' _equ', 'Решение линейного уравнения с неизвестными'],
        [' _dequ', 'Решение квадратного уравнения, написав лишь значение его членов'],
    
    ],
    Поиск:[
        [' _wiki','Поиск по википедии'],
        [' _web', 'Поиск в интернете'],
        [' _info _i',"Выдача информации о пользователе или роли по ID или упоминанию"],
        [' _server',"Информация об этом сервере"]
    ],
    Дополнительно: [
        [" _help", "Отправка ссылки на эту страницу" ],
        [" _invite", "Отправка ссылки на страницу приглашения Миры на сервер" ],
        [' _about','Отправка ссылки на корень сайта'],
        [' _uptime','Информация о том, сколько Мира уже не спит']

        
    ],
}
// keys = Object.keys(commands)
commands.keys = Object.keys(commands)
commands.cfg = {
    prefix: " _"
}



s = location.search.slice(1)
if (s == "role"){
   var cmd   = commands.cfg.prefix+"role @user @role..."
   var descr = "Позволяет добавлять одну или несколько ролей на определенного пользователя. Достаточно лишь упомянуть пользователя, а потом упомянуть столько ролей - сколько нужно на него добавить"    
} else {ishelp = false}
if (ishelp != false){generate_help(cmd,descr)}