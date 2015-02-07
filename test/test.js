"use strict";
var requireFrom = require('require-from');
var assert      = require('power-assert');

describe('単純選択法による昇順、降順のテスト', function(){
  var privateFuncs = requireFrom('privateFuncExports', module, './../logic/selection-sort');
  var data         = [2, 9, 3, 5, 6, 10, 1];

  it('ascとは、第1引数と第2引数を比較した際、第2引数が小さい事である', function(){
    assert(privateFuncs.asc(10, 1) === true);
  });

  it('descとは、第1引数と第2引数を比較した際、第2引数が大きい事である', function(){
    assert(privateFuncs.desc(1, 10) === true);
  });

  describe('selectionSortとは、単純選択法による並び替えを行う事である', function(){
    it('昇順', function(){
      var ascResult = [1, 2, 3, 5, 6, 9, 10];
      assert.deepEqual(privateFuncs.selectionSort(data, privateFuncs.asc), [1, 2, 3, 5, 6, 9, 10]);
    });
    it('降順', function(){
      var descResult = [10, 9, 6, 5, 3, 2, 1];
      assert.deepEqual(privateFuncs.selectionSort(data, privateFuncs.desc), [10, 9, 6, 5, 3, 2, 1]);
    });
  });
});
