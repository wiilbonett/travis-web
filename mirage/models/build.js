import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  repository: belongsTo('repository'),
  commit: belongsTo()
});
