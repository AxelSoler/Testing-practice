class calculator {
  constructor(number1, number2) {
  this.number1 = number1;
  this.number2 = number2
  }

  add = (number1, number2) => {
    return number1 + number2;
  }

  subtract = (number1, number2) => {
    return number1 - number2;
  }

  divide = (number1, number2) => {
    return number1 / number2;
  }

  multiply = (number1, number2) => {
    return number1 * number2;
  }
}

module.exports = calculator;

// describe('add', () => {
//   test('1+2 to be 3', () => {
//     expect(calculator(1,2).add).toBe(3);
//   });

//   test('4-3 to be 1', () => {
//     expect(calculator(4,3).subtract).toBeFalsy();
//   });
// });

  // constructor(title, author) {
  //   this.title = title;
  //   this.author = author;
  //   this.id = Math.random();
  // }

  // addBook = (book) => {
  //   this.books.push(book);
  //   localStorage.setItem('listBooks', JSON.stringify(this.books));
  // }

  // deleteItem = (id) => {
  //   const book = document.getElementById(id);
  //   book.remove();
  //   this.books = this.books.filter((bookObj) => bookObj.id !== id);
  //   localStorage.setItem('listBooks', JSON.stringify(this.books));
  // }