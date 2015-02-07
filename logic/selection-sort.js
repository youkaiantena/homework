/**
 * descとは、第1引数と第2引数を比較した際、第2引数が大きい事である
 *
 * @param int value
 * @param int other
 * @return boolean
 */
function desc(value, other){
  return (value < other);
}

/**
 * ascとは、第1引数と第2引数を比較した際、第2引数が小さい事である
 *
 * @param int value
 * @param int other
 * @return boolean
 */
function asc(value, other){
  return (other < value);
}

/**
 * selectionSortとは、単純選択法による並び替えを行う事である
 *
 * @param array data
 * @param callback predicate
 * @return array
 */
function selectionSort(data, predicate){
  var copy = data.concat();

  copy.forEach(function(value, index, _copy){
    _copy.forEach(function(_value, _index){
      var valueOfIndex = _copy[index];

      if (index < _index && predicate(valueOfIndex, _value)) {
        _copy[index] = _value;
        _copy[_index] = valueOfIndex;
      }
    });
  });

  return copy;
}

module.privateFuncExports = {
  desc: desc,
  asc: asc,
  selectionSort: selectionSort
};

module.exports = (function(){
  function Sort(){
    this.asc = function(data){
      return selectionSort(data, asc);
    };

    this.desc = function(data){
      return selectionSort(data, desc);
    };
  }
  return Sort;
})();
