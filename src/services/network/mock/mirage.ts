import {Server} from 'miragejs';
import {DEV_API} from '../../../config';
import {Foo} from '../foo/models';
import {fooService} from '../foo/fooService';

/**
 * Use mirage to mock APIs.
 */
export const makeMirage = () =>
  new Server({
    urlPrefix: DEV_API,
    routes: function () {
      // Logging
      this.pretender.handledRequest = function (verb, path, request) {
        console.log(`${verb}: ${path}`, request);
      };

      this.get(fooService.paths.getFoo(), (): Foo => mockResponse);
    },
  });

const mockResponse = {
  _id: '5ff8a95b26a4822b51189406',
};
