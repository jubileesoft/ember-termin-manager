import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Type from 'ember__routing';

interface IndexViewArgs {}

export default class IndexView extends Component<IndexViewArgs> {
  @service router!: Type.Router;

  @action
  newTenant() {
    console.log('Create new tenant.');
    this.router.transitionTo('protected.new');
  }
}
