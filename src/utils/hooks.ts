import { useEffect, useState } from 'react';

export const useAsyncEffect = <T = void>(
  func: () => Promise<T>,
  dependencies?: unknown[],
  cleanup?: () => void,
): { executing: boolean; result?: T; error?: Error } => {
  const [executing, setExecuting] = useState(true);
  const [result, setResult] = useState<T>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setExecuting(true);
    setResult(undefined);
    setError(undefined);

    func()
      .then(setResult)
      .catch(setError)
      .finally(() => setExecuting(false));

    return cleanup || (() => {});
  }, dependencies || []);

  return { executing, result, error };
};
