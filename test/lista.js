/**
 * Copyright (c) 2023, Laboratorio de Microprocesadores
 * Facultad de Ciencias Exactas y Tecnología, Universidad Nacional de Tucumán
 * https://www.microprocesadores.unt.edu.ar/
 *
 * Copyright (c) 2023, Esteban Volentini <evolentini@herrera.unt.edu.ar>
 *
 * SPDX-License-Identifier: MIT
 */

const { assert } = require('chai')

const describe = require('mocha').describe
const it = require('mocha').it
const List = require('../src/lista')

describe('In the list of pairs key-value ...', () => {
  describe('When the list is empty', () => {
    it('There is cero elements', () => {
      const newList = new List()
      assert.equal(newList.length(), 0)
    })
    it('There is no key value', () => {
      const newList = new List()
      assert.isNaN(newList.find('key'))
    })
  })

  describe('When an elements is added to the empty list', () => {
    it('There is one element', () => {
      const newList = new List()
      newList.add('key', 'value')
      assert.equal(newList.length(), 1)
    })
    it('The key value in first is found', () => {
      const newList = new List()
      newList.add('key', 'value')
      assert.equal(newList.find('key'), 'value')
    })

    it('There is one element', () => {
      const newList = new List()
      newList.add('key', 'value')
      newList.add('key', 'value2')
      assert.equal(newList.length(), 1)
    })
    it('The value of the key is updated', () => {
      const newList = new List()
      newList.add('key', 'value')
      newList.add('key', 'value2')
      assert.equal(newList.find('key'), 'value2')
    })
  })
})

// HINT: Para ejecutar los tests, ejecutar el siguiente comando en la terminal:
// npx mocha test/lista.js
