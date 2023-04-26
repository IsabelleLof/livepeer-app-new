import { useAsset } from '@livepeer/react';

export default function Home() {

  const asset = useAsset({
    assetId: '0d30c7ab-4378-4b7d-9337-06a487aaab48',
  });

  //<h1>{JSON.stringify(asset)}</h1>

  return (
    <div>
      <h1>{JSON.stringify(asset)}</h1>
    </div>

  );
}
