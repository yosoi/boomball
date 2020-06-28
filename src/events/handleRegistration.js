import register from './register'
import unregister from './unregister'

export default function(name, fn, registered) {
  (registered ? register : unregister)(name, fn);
};
