import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppThunk } from 'src/redux/store';

interface UseThunkOptions {
  payload?: any;
}

export default (actionFunc: (payload?: any) => AppThunk, options: UseThunkOptions = {}): void => {
  const dispatch = useDispatch();

  useEffect(() => {
    let isSubscribed = true;

    const fetchData = async () => {
      try {
        if (isSubscribed) {
          if (options.payload) {
            await dispatch(actionFunc(options.payload));
          } else {
            await dispatch(actionFunc());
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    return () => {
      isSubscribed = false;
    };
  }, [dispatch, actionFunc, options.payload]);
};
