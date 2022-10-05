"use strict";

class PrintEditionItem {
  type = null;
  #state = 100;
  name = null;
  releaseDate = null;
  pagesCount = null;

  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
  }

  set state(number) {
    if (number < 0) {
      this.#state = 0;
    } else if (number > 100) {
      this.#state = 100;
    } else {
      this.#state = number;
    }
  }

  get state() {
    return this.#state;
  }

  fix() {
    this.state *= 1.5;
  }
}

class Magazine extends PrintEditionItem {
  type = "magazine";

  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
  }
}

class Book extends PrintEditionItem {
  type = "book";
  author = null;

  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);

    this.author = author;
  }
}

class NovelBook extends Book {
  type = "novel";

  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
  }
}

class FantasticBook extends Book {
  type = "fantastic";

  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
  }
}

class DetectiveBook extends Book {
  type = "detective";

  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
  }
}

// Задача №2. Библиотека

class Library {
  name = null;
  books = [];

  constructor(name) {
    this.name = name;
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  #findBookAndReturnBookAndIndex(key, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][key] === value) {
        return {
          book: this.books[i],
          index: i,
        };
      }
    }
    return null;
  }

  findBookBy(key, value) {
    const findBook = this.#findBookAndReturnBookAndIndex(key, value);
    return findBook !== null ? findBook.book : null;
  }

  giveBookByName(bookName) {
    const findBook = this.#findBookAndReturnBookAndIndex("name", bookName);
    if (findBook !== null) {
      this.books.splice(findBook.index, 1);
      return findBook.book;
    } else {
      return null;
    }
  }
}

const bookFoo = new Book("Лев Толстой", "Война и Мир", 2019, 500);
const bookBar = new NovelBook("Лев Толстой 1", "Война и Мир 1", 2020, 501);

const arrBook = [
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  ),
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  ),
  new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138),
  new Magazine("Мурзилка", 1924, 60),
];

const library1 = new Library("library1");

library1.addBook(bookFoo);
library1.addBook(bookBar);
library1.addBook(new Book("Автор 1", "Книга 1", 1970, 350));

for (let i = 0; i < arrBook.length; i++) {
  library1.addBook(arrBook[i]);
}

// console.log(library1.books);

// console.log(library1.giveBookByName("Пикник на обочине"));

// console.log(library1.findBookBy('author', 'Лев Толстой 1'));
// console.log(library1.findBookBy('type', 'novel'));
// console.log(library1.findBookBy('name', 'Война и Мир 1'));

//ЗАДАЧА 3

class Student {
    constructor(name) {
        this.name = name;
        this.gradebook = [];
    }

    addMark(mark, subjectName) { 

        if (mark < 1 || mark > 5) {
            console.log(`!!! Ошибка, оценка должна быть числом от 1 до 5, а у вас ${mark} !!!`)
        } else {

            if (this.gradebook.length == 0) {
                this.gradebook = [{subjectName: subjectName, marks: [mark]}];
                console.log(`Журнал оценок пустой. Создаем в журнале первый предмет [0] ${subjectName} и фиксируем первую оценку ${mark}.`);
            } else {
            
                let searchSubject;
                for (let i = 0; i < this.gradebook.length; i++) {
                    if (this.gradebook[i].subjectName === subjectName) {
                        searchSubject = i;
                        console.log(`Поиск предмета ${subjectName}: найден под индексом [${searchSubject}].`);
                        break;
                    } else {
                        searchSubject = false; 
                    }
                }

                if (searchSubject === false) {
                    this.gradebook.push({subjectName: subjectName, marks: [mark]});
                    console.log(`Поиск предмета ${subjectName}: не найден.`);
                    console.log(`Массив не пустой, но и предмета ${subjectName} в массиве нет.`);
                    console.log(`Создали предмет ${subjectName} в массиве и записали оценку ${mark}`);
                } else {

                    this.gradebook[searchSubject].marks.push(mark);
                    console.log(`Массив не пустой. Нашли предмет [${searchSubject}] ${subjectName}. Добавили дополнительную оценку ${mark}`);
                    console.log(`Текущие оценки предмета ${subjectName}: [${this.gradebook[searchSubject].marks}]`);
                }
            }
        }
    }

    getAverageBySubject(subjectName) {

            if (this.gradebook.length == 0) {
                console.log(`!!! Невозможно рассчитать среднюю оценку. Журнал оценок пустой !!!`);
            } else {
            
                let searchSubject;
                for (let i = 0; i < this.gradebook.length; i++) {
                    if (this.gradebook[i].subjectName === subjectName) {
                        searchSubject = i;
                        console.log(`Поиск предмета ${subjectName}: найден под индексом [${searchSubject}].`);
                        break;
                    } else {
                        searchSubject = false; 
                    }
                }

                if (searchSubject === false) {
                    console.log(`Поиск предмета ${subjectName}: Несуществующий предмет.`);
                } else {
                    
                    let sum = 0;
                    this.gradebook[searchSubject].marks.forEach(item => sum += item);
                    
                    console.log(Number(sum / this.gradebook[searchSubject].marks.length).toFixed(1));
                    return sum / this.gradebook[searchSubject].marks.length;
                }
            }
    }

    getAverage() {
        let sum = 0;
        let clock = 0;

        for (let i=0; i < this.gradebook.length; i++) {
            for (let j=0; j < this.gradebook[i].marks.length; j++) {
                sum += this.gradebook[i].marks[j];
                clock++;
            }
        }


        console.log(Number(sum / clock).toFixed(1));
        return sum / clock;
    }

    exclude(reason) {
        delete this.gradebook;
        this.excluded = reason;
    }
}
  
const student5 = new Student("Александр Буков");
  
// Проверяем результат выполнение метода addMark
student5.addMark(5, "Algebra");
student5.addMark(3, "Algebra");
student5.addMark(3, "History");
student5.addMark(4, "History");
student5.addMark(3, "Algebra");
student5.addMark(5, "History");
student5.addMark(3, "Algebra");
student5.addMark(3, "Geometry");
student5.addMark(4, "Geometry");
student5.addMark(6, "Algebra"); // Ошибка
student5.addMark(5, "History");
student5.addMark(4, "Geometry");


student5.getAverageBySubject("Geometry"); 
student5.getAverageBySubject("Algebra"); 
student5.getAverageBySubject("History"); 

student5.getAverage(); // Средний балл по всем предметам 4.75

student5.exclude("Исключен за попытку подделать оценки");

console.log(student5.gradebook);
console.log(student5);