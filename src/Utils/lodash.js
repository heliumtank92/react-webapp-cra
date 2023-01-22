import _isArray from 'lodash/isArray'
import _isObject from 'lodash/isObject'
import _isEmpty from 'lodash/isEmpty'
import _keys from 'lodash/keys'
import _toString from 'lodash/toString'
import _get from 'lodash/get'
import _keyBy from 'lodash/keyBy'
import _isEqual from 'lodash/isEqual'
import _find from 'lodash/find'
import _filter from 'lodash/filter'
import _set from 'lodash/set'
import _forEach from 'lodash/forEach'
import _map from 'lodash/map'
import _reduce from 'lodash/reduce'
import _random from 'lodash/random'
import _pick from 'lodash/pick'
import _split from 'lodash/split'
import _replace from 'lodash/replace'
import _repeat from 'lodash/repeat'
import _padEnd from 'lodash/padEnd'
import _camelCase from 'lodash/camelCase'
import _cloneDeep from 'lodash/cloneDeep'
import _startsWith from 'lodash/startsWith'
import _differenceBy from 'lodash/differenceBy'
import _times from 'lodash/times'
import _max from 'lodash/max'
import _min from 'lodash/min'

const _isEmptyJSON = (value) => (_isObject(value) && !_isArray(value) && _isEmpty(value))

export {
  _isArray,
  _isObject,
  _isEmpty,
  _keys,
  _toString,
  _get,
  _keyBy,
  _isEqual,
  _find,
  _filter,
  _set,
  _forEach,
  _map,
  _reduce,
  _random,
  _pick,
  _split,
  _replace,
  _repeat,
  _padEnd,
  _camelCase,
  _cloneDeep,
  _startsWith,
  _differenceBy,
  _times,
  _max,
  _min,

  _isEmptyJSON
}
