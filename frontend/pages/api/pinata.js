// uploads the details to pinata
import { NFTStorage, File } from 'nft.storage'

export default async function uploadNFTData(image, values) {
 const NFT_STORAGE_TOKEN =
   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDdjMTVkRTM4NUU0Mzc1M0RBODNGZUE0NjgzZkZhMzc4RTFjZTUyZjEiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2ODk3NjUxMTc3NCwibmFtZSI6IkRvY1QifQ.t7bF1OuxuS6S9QMP_rfl72fYMneOa1jzs-mZhdjEhog';
 const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });

 const imageFile = new File(values.images, { type: 'image/png' });
 const metadata = await client.store({
   name: values.name,
   description: values.description,
   website: values.website,
   tokensupply: values.tokensupply,
   token: values.token,
   image: imageFile,
 });

console.log(metadata.url)

}

// returns the cid and metadata url
