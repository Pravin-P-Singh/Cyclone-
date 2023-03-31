

import anchor from "@project-serum/anchor";

module.exports = async function (provider) {
  // Configure client to use the provider.
  console.log('in migration')
  anchor.setProvider(provider);

}
