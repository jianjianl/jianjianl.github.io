define('router', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _vueRouter = require('node_modules/vue-router/dist/vue-router.common');
  
  var _vueRouter2 = _interopRequireDefault(_vueRouter);
  
  var _componentRemark = require('component/remark.vue');
  
  var _componentRemark2 = _interopRequireDefault(_componentRemark);
  
  var _componentTag = require('component/tag.vue');
  
  var _componentTag2 = _interopRequireDefault(_componentTag);
  
  var routes = [{
      path: '/main/:id',
      component: _componentRemark2['default'],
      props: true
  }, { path: '/tag', component: _componentTag2['default'] }];
  
  var router = new _vueRouter2['default']({
      mode: 'history',
      routes: routes
  });
  
  router.beforeEach(function (to, from, next) {});
  
  exports['default'] = router;
  module.exports = exports['default'];

});
