import { ICategory, IQuestion } from "../types";

const questions: { [key: string]: IQuestion[] } = {
  "Татарстан и культура": [
    {
      question: "Какой город является столицей Татарстана?",
      options: ["Казань", "Набережные Челны", "Альметьевск", "Иннополис"],
      correctAnswer: 1,
    },
    {
      question:
        "Какое татарское блюдо традиционно готовится из теста с мясом и картофелем?",
      options: ["Блины", "Эчпочмак", "Беляш", "Чебуреки"],
      correctAnswer: 2,
    },
    {
      question:
        "Какой праздник отмечается в Татарстане как день урожая и труда?",
      options: ["Наурыз", "Сабантуй", "Ураза-байрам", "Курбан-байрам"],
      correctAnswer: 2,
    },
    {
      question:
        "Какой татарский музыкальный инструмент считается символом татарской музыки?",
      options: ["Гусли", "Курай", "Балалайка", "Домра"],
      correctAnswer: 2,
    },
    {
      question:
        "Какой архитектурный памятник Татарстана является объектом Всемирного наследия ЮНЕСКО?",
      options: [
        "Казанский Кремль",
        "Мечеть Кул Шариф",
        "Церковь Петра и Павла",
        "Дворец земледельцев",
      ],
      correctAnswer: 1,
    },
    {
      question:
        "Какое традиционное татарское лакомство готовится из меда и теста?",
      options: ["Баклава", "Пахлава", "Торт «Наполеон»", "Чак-чак"],
      correctAnswer: 4,
    },
    {
      question:
        "Какой татарский поэт считается основоположником новой татарской литературы?",
      options: [
        "Ренат Харис",
        "Муса Джалиль",
        "Сибгатулла Ремизов",
        " Габдулла Тукай",
      ],
      correctAnswer: 4,
    },
    {
      question: "Какой из этих городов не находится в Татарстане?",
      options: ["Чистополь", "Набережные Челны", "Нефтекамск", "Зеленодольск"],
      correctAnswer: 3,
    },
    {
      question: "Какое животное является символом Татарстана?",
      options: ["Дракон", "Барс", "Лебедь", "Тигр"],
      correctAnswer: 2,
    },
    {
      question:
        "Какие полезные ископаемые являются основными ресурсами недр Татарстана?",
      options: ["Нефть", "Золото", "Уголь", "Минеральные воды"],
      correctAnswer: 1,
    },
  ],
  Backend: [
    {
      question:
        "Какой из следующих фреймворков является популярным для разработки на Java?",
      options: ["Flask", "Express", "Spring", "Django"],
      correctAnswer: 3,
    },
    {
      question: "Что такое ORM?",
      options: [
        "Объектно-реляционное отображение",
        "Операционная система для баз данных",
        "Язык разметки для баз данных",
        "Протокол обмена данными",
      ],
      correctAnswer: 1,
    },
    {
      question:
        "Какой из следующих фреймворков используется для разработки на Ruby?",
      options: ["Laravel", "Django", "Ruby on Rails", "Express"],
      correctAnswer: 3,
    },
    {
      question: "Что такое WebSocket?",
      options: [
        "Протокол для односторонней передачи данных",
        "Протокол для двусторонней связи в реальном времени между клиентом и сервером",
        "Метод отправки запросов к API",
        "Язык программирования",
      ],
      correctAnswer: 2,
    },
    {
      question: "Что такое JWT (JSON Web Token)?",
      options: [
        "Формат изображения",
        "Метод аутентификации и передачи информации между клиентом и сервером",
        "Протокол передачи данных",
        "Фреймворк для работы с API",
      ],
      correctAnswer: 2,
    },
    {
      question: "Что такое API?",
      options: [
        "Интерфейс для взаимодействия между различными системами",
        "База данных для хранения данных",
        "Язык программирования",
        "Фреймворк для создания веб-приложений",
      ],
      correctAnswer: 1,
    },
    {
      question: "Что такое NoSQL?",
      options: [
        "Тип реляционных баз данных",
        "Тип нереляционных баз данных, который не использует SQL как основной язык запросов",
        "Протокол передачи данных",
        "Язык программирования",
      ],
      correctAnswer: 2,
    },
    {
      question:
        "Какой из этих инструментов используется для автоматизации процессов сборки и развертывания приложений?",
      options: ["Git", "Jenkins", "Docker", "Nginx"],
      correctAnswer: 2,
    },
    {
      question:
        "Какой из этих методов аутентификации является наиболее распространенным в современных веб-приложениях?",
      options: ["Basic Auth", "Token Auth", "Digest Auth", "OAuth 2.0"],
      correctAnswer: 4,
    },
    {
      question: 'Что такое "CORS" (Cross-Origin Resource Sharing)?',
      options: [
        "Механизм, позволяющий ограничить доступ к ресурсам на одном домене с другого домена.",
        "Протокол передачи данных.",
        "Язык программирования.",
        "Фреймворк для создания API.",
      ],
      correctAnswer: 1,
    },
  ],
  "Product Management": [
    {
      question: "Что такое управление продуктом?",
      options: [
        "Процесс разработки программного обеспечения",
        "Процесс планирования, разработки и маркетинга продукта",
        "Процесс управления проектами",
        "Процесс продаж",
      ],
      correctAnswer: 2,
    },
    {
      question: "Что такое MVP (минимально жизнеспособный продукт)?",
      options: [
        "Продукт с максимальным количеством функций",
        "Продукт с минимальным набором функций, достаточным для удовлетворения потребностей пользователей",
        "Продукт, который уже вышел на рынок",
        "Продукт с высокой ценой",
      ],
      correctAnswer: 2,
    },
    {
      question: "Что такое Agile?",
      options: [
        "Методология управления проектами с фиксированным планом",
        "Методология, сосредоточенная на документации",
        "Методология, использующая только водопадный подход",
        "Методология, основанная на гибкости и итеративном подходе к разработке продукта",
      ],
      correctAnswer: 4,
    },
    {
      question: 'Что такое "продуктовая стратегия"?',
      options: [
        "Общее видение и цели продукта на длительный срок",
        "План по продвижению продукта на рынок",
        "Описание функций продукта",
        "План по увеличению продаж",
      ],
      correctAnswer: 1,
    },
    {
      question: 'Что такое "план выпуска продукта"?',
      options: [
        "План по улучшению качества продукта",
        "План, описывающий, как и когда продукт будет представлен пользователям",
        "План по увеличению прибыли",
        "План по обучению команды",
      ],
      correctAnswer: 2,
    },
    {
      question: 'Что такое "продуктовая метрика"?',
      options: [
        "Показатель, используемый для оценки успеха продукта",
        "Описание функций продукта",
        "Стратегия маркетинга продукта",
        "Отчет о продажах",
      ],
      correctAnswer: 1,
    },
    {
      question:
        "Какой из следующих факторов является ключевым при определении целевой аудитории?",
      options: [
        "Географическое положение",
        "Поведение и предпочтения пользователей",
        "Возраст и пол",
        "Все вышеперечисленное",
      ],
      correctAnswer: 4,
    },
    {
      question:
        "Какой из следующих методов часто используется для оценки удовлетворенности пользователей?",
      options: [
        "NPS (Net Promoter Score)",
        "SWOT-анализ",
        "PESTLE-анализ",
        "Анализ данных",
      ],
      correctAnswer: 1,
    },
    {
      question:
        "Какой из следующих подходов лучше всего подходит для быстрого тестирования идей?",
      options: [
        "Водопадный метод",
        "Agile",
        "Lean Startup",
        "Все вышеперечисленное",
      ],
      correctAnswer: 3,
    },
    {
      question:
        "Какой из следующих аспектов важен для успешного запуска продукта?",
      options: [
        "Подготовка маркетинговой стратегии",
        "Обучение команды поддержки пользователей",
        "Тестирование продукта на целевой аудитории",
        "Все вышеперечисленное",
      ],
      correctAnswer: 4,
    },
  ],
  "Oil industry": [
    {
      question:
        "Какой из следующих процессов используется для извлечения нефти из подземных резервуаров?",
      options: ["Дистилляция", "Фракционирование", "Бурение", "Кристаллизация"],
      correctAnswer: 3,
    },
    {
      question:
        "Какой из следующих терминов обозначает смесь углеводородов, содержащуюся в нефти?",
      options: ["Газ", "Сажа", "Нефть", "Вода"],
      correctAnswer: 3,
    },
    {
      question:
        "Какой метод переработки нефти используется для получения бензина?",
      options: ["Крекинг", "Полимеризация", "Гидрогенизация", "Оксидирование"],
      correctAnswer: 1,
    },
    {
      question:
        "В какой стране находится крупнейшее нефтяное месторождение в мире — Гавар?",
      options: ["Иран", "Саудовская Аравия", "Ирак", "Россия"],
      correctAnswer: 2,
    },
    {
      question: 'Что такое "нефтяной шельф"?',
      options: [
        "Площадь суши, где добывают нефть",
        "Нефтепровод",
        "Хранилище для нефти",
        "Подводные участки, где находятся нефтяные запасы",
      ],
      correctAnswer: 4,
    },
    {
      question: 'Что такое "нефтяной кризис"?',
      options: [
        "Падение цен на нефть",
        "Увеличение добычи нефти",
        "Проблемы с поставками нефти",
        "Снижение спроса на нефть",
      ],
      correctAnswer: 3,
    },
    {
      question:
        "Как называется крупнейшая нефтяная компания в мире по объему добычи?",
      options: ["ExxonMobil", "BP", "Saudi Aramco", "Shell"],
      correctAnswer: 3,
    },
    {
      question: 'Что такое "нефтепровод"?',
      options: [
        "Устройство для переработки нефти",
        "Трубопровод для транспортировки нефти и нефтепродуктов",
        "Месторождение нефти под землей",
        "Нефтяная платформа на море",
      ],
      correctAnswer: 2,
    },
    {
      question: 'Что такое "нефтяная платформа"?',
      options: [
        "Сооружение для бурения и добычи нефти на море",
        "Судно для транспортировки нефти",
        "Установка для переработки нефти",
        "Хранилище для хранения готовых нефтепродуктов",
      ],
      correctAnswer: 1,
    },
    {
      question: "Какой из следующих факторов не влияет на качество нефти?",
      options: [
        "Геологические условия месторождения",
        "Метод добычи нефти",
        "Время года, когда была добыта нефть",
        "Состав углеводородов в нефти",
      ],
      correctAnswer: 3,
    },
  ],
  Frontend: [
    {
      question:
        "Какой язык программирования является основным для создания интерактивных веб-страниц?",
      options: ["HTML", "CSS", "JavaScript", "PHP"],
      correctAnswer: 3,
    },
    {
      question: "Что такое HTML?",
      options: [
        "Язык стилей",
        "Язык разметки",
        "Язык программирования",
        "База данных",
      ],
      correctAnswer: 2,
    },
    {
      question: "Что такое DOM?",
      options: [
        "Документная объектная модель",
        "Динамическая объектная модель",
        "Дизайнерская объектная модель",
        "Данные объектной модели",
      ],
      correctAnswer: 1,
    },
    {
      question:
        "Какой из следующих фреймворков является популярным для создания пользовательских интерфейсов?",
      options: ["Django", "Flask", "React", "Laravel"],
      correctAnswer: 3,
    },
    {
      question:
        "Какой из следующих атрибутов используется для создания гиперссылки в HTML?",
      options: ["link", "src", "href", "url"],
      correctAnswer: 3,
    },
    {
      question:
        "Какой метод используется для добавления нового элемента в конец массива в JavaScript?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      correctAnswer: 1,
    },
    {
      question:
        "Какой из этих фреймворков является библиотекой для работы с JavaScript?",
      options: ["Angular", "Vue.js", "jQuery", "Все вышеперечисленное"],
      correctAnswer: 4,
    },
    {
      question: 'Что такое "CSS Grid"?',
      options: [
        "Метод для создания адаптивных сайтов",
        "Система для создания сеток на веб-страницах",
        "Инструмент для работы с изображениями",
        "Фреймворк для JavaScript",
      ],
      correctAnswer: 2,
    },
    {
      question: 'Что такое "webpack"?',
      options: [
        "Сервер для разработки приложений",
        "Инструмент сборки модулей JavaScript",
        "Фреймворк для создания пользовательских интерфейсов",
        "Библиотека для работы с CSS",
      ],
      correctAnswer: 2,
    },
    {
      question:
        "Какой из этих тегов используется для определения раздела страницы в HTML5?",
      options: ["<section>", "<div>", "<article>", "Все вышеперечисленное"],
      correctAnswer: 4,
    },
  ],
  IT: [
    {
      question:
        "По мотивам рассказов какого американца поставлен фильм «Я, Робот»?",
      options: [
        "Роберт Хайнлайн",
        "Айзек Азимов",
        "Роберт Шекли",
        "Клиффорд Саймак",
      ],
      correctAnswer: 2,
    },
    {
      question:
        "До недавнего переезда штаб-квартира компании Oracle находилась недалеко от города Сан-Карлос. Назовите код аэропорта города Сан-Карлос.",
      options: ["SQL", "MDX", "Gremlin", "LINQ"],
      correctAnswer: 1,
    },
    {
      question:
        "Какой коллектив вошёл в Книгу рекордов Гиннесса как «Самая успешная виртуальная группа»?",
      options: ["Gorillaz", "Глюк оZа", "Duft Punk", "Crazy Frog"],
      correctAnswer: 1,
    },
    {
      question:
        "В национальном парке Аокигахара расположены крупные залежи руды, и некий предмет там не функционирует. На логотипе какого браузера размещён этот предмет?",
      options: ["Chrome", "Safari", "Atom", "Firefox"],
      correctAnswer: 2,
    },
  ],
  "Анализ данных": [
    {
      question: "Что такое корреляция?",
      options: [
        "Измерение зависимости между двумя переменными",
        "Измерение различий между группами",
        "Процесс классификации данных",
        "Метод визуализации данных",
      ],
      correctAnswer: 1,
    },
    {
      question: "Что такое регрессионный анализ?",
      options: [
        "Метод для определения связи между переменными",
        "Метод для группировки данных",
        "Метод для визуализации данных",
        "Метод для очистки данных",
      ],
      correctAnswer: 1,
    },
    {
      question: 'Что такое "выброс" в наборе данных?',
      options: [
        "Среднее значение набора данных",
        "Значение, значительно отличающееся от других значений",
        "Нормальное распределение данных",
        "Процесс очистки данных",
      ],
      correctAnswer: 2,
    },
    {
      question: 'Что такое "нормальное распределение"?',
      options: [
        "Распределение, где все значения равновероятны",
        "Распределение, имеющее форму колокола",
        "Распределение с равными частями",
        "Распределение, где данные не имеют закономерностей",
      ],
      correctAnswer: 2,
    },
    {
      question: 'Что такое "кросс-валидация"?',
      options: [
        "Метод очистки данных",
        "Метод визуализации данных",
        "Метод оценки модели на различных подвыборках",
        "Метод группировки данных",
      ],
      correctAnswer: 3,
    },
    {
      question: 'Что такое "кластеризация"?',
      options: [
        "Процесс классификации объектов по категориям",
        "Процесс объединения схожих объектов в группы",
        "Процесс поиска закономерностей в временных рядах",
        "Процесс обработки текстовых данных",
      ],
      correctAnswer: 2,
    },
    {
      question: 'Что такое "доверительный интервал"?',
      options: [
        "Интервал, в котором находится среднее значение выборки",
        "Интервал, показывающий разброс данных",
        "Интервал, в котором с заданной вероятностью находится истинное значение параметра популяции",
        "Интервал, показывающий количество выбросов",
      ],
      correctAnswer: 3,
    },
    {
      question: 'Что такое "гипотеза" в контексте статистического анализа?',
      options: [
        "Утверждение о связи между переменными, требующее проверки",
        "Объяснение наблюдаемого явления",
        "Предположение о распределении данных",
        "Все вышеперечисленное",
      ],
      correctAnswer: 1,
    },
    {
      question:
        "Какой из следующих методов может использоваться для очистки данных?",
      options: [
        "Удаление дубликатов",
        "Замена пропусков",
        "Нормализация",
        "Все вышеперечисленное",
      ],
      correctAnswer: 4,
    },
    {
      question: 'Что такое "фрейм данных" в контексте анализа данных?',
      options: [
        "Таблица с данными",
        "График с данными",
        "Набор алгоритмов для анализа",
        "Система хранения данных",
      ],
      correctAnswer: 1,
    },
  ],
  Татнефть: [
    {
      question: "Первое упоминание о «казанской нефти» датируется",
      options: ["1836", "1568", "1377", "1950"],
      correctAnswer: 2,
    },
    {
      question:
        "Как называется первое самое крупное месторождение нефти в Татарстане",
      options: ["Мамонтовское", "Русское", "Ромашкинское", "Федоровское"],
      correctAnswer: 3,
    },
    {
      question: "Количество собственных АЗС насчитывает:",
      options: ["Более 550", "Более 700", "Более 630", "Более 800"],
      correctAnswer: 2,
    },
    {
      question: "В какому году добыто трехмиллиардная тонна нефти?",
      options: ["2007", "2010", "2017", "2022"],
      correctAnswer: 1,
    },
    {
      question: "Хоккейный клуб «Ак Барс» стал обладателем:",
      options: [
        "Кубок Надежды",
        "Кубок Западной конференции",
        "Кубок Гагарина",
        "Кубок континента им .В.В. Тихонова",
      ],
      correctAnswer: 3,
    },
    {
      question:
        "В 2021 году «Татнефть» установила «зеленый рекорд» и посадила:",
      options: [
        "8 млн. деревьев",
        "9 млн. деревьев",
        "3 млн. деревьев",
        "5 млн. деревьев",
      ],
      correctAnswer: 1,
    },
    {
      question:
        "Нефтеперерабатывающий завод «ТАНЕКО» производит бензин класса:",
      options: ["ЕВРО-3", "ЕВРО-4", "ЕВРО-5", "ЕВРО-6"],
      correctAnswer: 4,
    },
    {
      question: "Год образования объединения «Татнефть»:",
      options: ["1925", "1949", "1950", "1963"],
      correctAnswer: 3,
    },
    {
      question:
        "Композитный кластер Компании занимает ведущие позиции на отечественном рынке по производству:",
      options: [
        "Кварцевого волокна",
        "Пластикового оптоволокна",
        "Стекловолокна",
        "Многомодового оптоволокна",
      ],
      correctAnswer: 3,
    },
    {
      question: "Цель устойчивого развития Компании:",
      options: [
        "Минимизация влияния на изменения климата",
        "Рациональное использование природных ресурсов",
        "Улучшение системы управления воздействием на окружающую среду",
        "Все варианты верны",
      ],
      correctAnswer: 4,
    },
  ],
};

export const categories: ICategory[] = Object.entries(questions).map(
  ([name, questions]) => ({
    name,
    questions,
    score: 0,
    completed: false,
    userAnswers: [],
  })
);
