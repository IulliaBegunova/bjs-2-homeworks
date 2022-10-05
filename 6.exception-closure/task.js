function parseCount(str) {
    const parsed = Number.parseInt(str, 10);
  
    if (isNaN(parsed)) {
      throw new Error('Невалидное значение');
    }
  
    return parsed;
  }
  
  function validateCount(str) {
    try {
      const parsed = parseCount(str);
      return parsed;
    } catch (err) {
      return err;
    }
  }
  
  class Triangle {
    #perimeter = null;
    #a = null;
    #b = null;
    #c = null;
  
    constructor(a, b, c) {
      this.#a = a;
      this.#b = b;
      this.#c = c;
  
      const existanceTriangle = this.#checkExistanceTriangle(a, b, c);
      if (existanceTriangle === false) {
        throw new Error('Треугольник с такими сторонами не существует');
      }
  
      this.#perimeter = a + b + c;
    }
  
    #checkExistanceTriangle(a, b, c) {
      if (a + b < c || b + c < a || c + a < b) {
        return false;
      } else {
        return true;
      }
      // return !(a + b < c || b + c < a || c + a < b);
    }
  
    getPerimeter() {
      return this.#perimeter;
    }
  
    getArea() {
      const p = 0.5 * this.#perimeter; // p - полупериметр
      const area = Math.sqrt(p * (p - this.#a) * (p - this.#b) * (p - this.#c));
      return Number(area.toFixed(3));
    }
  }
  
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (err) {
      return {
        getArea: function () {
          return "Ошибка! Треугольник не существует";
        },
  
        getPerimeter: function () {
          return "Ошибка! Треугольник не существует";
        },
      };
    }
  }