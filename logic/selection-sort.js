var Sort = (function(){
  /**
   * 第1引数と第2引数を比較し、第2引数が大きい場合にtrueを返す
   *
   * @param int value
   * @param int other
   * @return boolean
   */
  function isHigh(value, other){
    return (value < other);
  }

  /**
   * 第1引数と第2引数を比較し、第2引数が小さい場合にtrueを返す
   *
   * @param int value
   * @param int other
   * @return boolean
   */
  function isLow(value, other){
    return (other < value);
  }

  /**
   * 渡された条件により、単純選択法による並び替えを行い、並び替えた後の配列を返す
   *
   * @param array data
   * @param callback predicate
   * @return array
   */
  function sort(data, predicate){
    var copy    = data.concat();

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

  var Sort = {
    asc: function(data){
      return sort(data, isLow);
    },
    desc: function(data){
      return sort(data, isHigh);
    }
  };

  return Sort;
})();

document.write('asc: ' + Sort.asc([8, 5, 10, 2, 1, 7]));
document.write('<br>');
document.write('desc: ' + Sort.desc([8, 5, 10, 2, 1, 7]));
