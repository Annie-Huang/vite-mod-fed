import { atom, useAtom } from 'jotai';

const countAtom = atom(0);

// We will have a custom hook called useCount, which will return a use atom that's going to give us back a value for it
// as well as a setter in a tuple pretty much like useState. So that will be the default output of this store,
// will be this useCount and that we can use for our count.
//
// And you also need to share the store between the remote application and the host application in vite.config.ts.
// (and need to add the jotia library into the shared list as well)
const useCount = () => useAtom(countAtom);

export default useCount;
