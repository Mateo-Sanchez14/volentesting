/**
 * Copyright (c) 2023, Laboratorio de Microprocesadores
 * Facultad de Ciencias Exactas y Tecnología, Universidad Nacional de Tucumán
 * https://www.microprocesadores.unt.edu.ar/
 *
 * Copyright (c) 2023, Esteban Volentini <evolentini@herrera.unt.edu.ar>
 *
 * SPDX-License-Identifier: MIT
 */

module.exports = class List {
  #lista

  constructor() {
    this.#lista = []
  }

  length() {
    return this.#lista.length
  }

  find(key) {
    for (let i = 0; i < this.#lista.length; i++) {
      if (this.#lista[i].key === key) {
        return this.#lista[i].value
      }
    }
    return NaN
  }

  add(key, value) {
    // Update the value if the key already exists
    if (this.find(key)) {
      for (let i = 0; i < this.#lista.length; i++) {
        if (this.#lista[i].key === key) {
          this.#lista[i].value = value
          return
        }
      }
    }
    // Add the new key-value pair
    this.#lista.push({ key: key, value: value })
  }
}
