// Generated by LiveScript 1.4.0
(function(){
  var module, test;
  module = QUnit.module, test = QUnit.test;
  module('ES6');
  test('Date#@@toPrimitive', function(assert){
    var TO_PRIMITIVE, toPrimitive, date, i$, x$, ref$, len$, y$, z$;
    TO_PRIMITIVE = Symbol.toPrimitive;
    toPrimitive = Date.prototype[TO_PRIMITIVE];
    assert.isFunction(toPrimitive);
    assert.arity(toPrimitive, 1);
    assert.looksNative(toPrimitive);
    assert.nonEnumerable(Object.prototype, TO_PRIMITIVE);
    date = new Date;
    assert.same(date[TO_PRIMITIVE]('string'), date.toString(), 'generic, hint "string"');
    assert.same(date[TO_PRIMITIVE]('number'), +date, 'generic, hint "number"');
    assert.same(date[TO_PRIMITIVE]('default'), date.toString(), 'generic, hint "default"');
    assert.same(toPrimitive.call(Object(2), 'string'), '2', 'generic, hint "string"');
    assert.same(toPrimitive.call(Object(2), 'number'), 2, 'generic, hint "number"');
    assert.same(toPrimitive.call(Object(2), 'default'), '2', 'generic, hint "default"');
    for (i$ = 0, len$ = (ref$ = [
      void 8, '', 'foo', {
        toString: fn$
      }
    ]).length; i$ < len$; ++i$) {
      x$ = ref$[i$];
      assert.throws(fn1$, TypeError, "throws on " + x$ + " as a hint");
    }
    for (i$ = 0, len$ = (ref$ = [1, false, 'string']).length; i$ < len$; ++i$) {
      y$ = ref$[i$];
      assert.throws(fn2$, TypeError, "throws on " + y$ + " as `this`");
    }
    if (STRICT) {
      for (i$ = 0, len$ = (ref$ = [null, void 8]).length; i$ < len$; ++i$) {
        z$ = ref$[i$];
        assert.throws(fn3$, TypeError, "throws on " + z$ + " as `this`");
      }
    }
    function fn$(){
      return 'string';
    }
    function fn1$(){
      new Date()[TO_PRIMITIVE](x$);
    }
    function fn2$(){
      toPrimitive.call(y$, 'string');
    }
    function fn3$(){
      toPrimitive.call(z$, 'string');
    }
  });
}).call(this);
