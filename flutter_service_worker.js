'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a89f64ebeb17d68bd387b45cb4ac7b11",
".git/config": "4be6b22682e4dbc82de6605f2713547a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4202d6db9dd7ba38e76827196eeccaf1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4096a49f8a461d93379c885ecdb5e5cd",
".git/logs/refs/heads/main": "648f5cb4288af545a2413030f2be1eeb",
".git/logs/refs/remotes/origin/main": "b1d9364eb2a6797e938e50733ecb7cfa",
".git/objects/02/8c630d641011d3510691dea4793aa425e3c033": "9cc6800e9a3a8b871a97ce7c48097610",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/146b53617234eef441c76432fde391f68b6209": "61791b27eb9b05b7563a09d3a7264c5e",
".git/objects/07/2d7c098201e41d19249b8c9366c38be5d3a43e": "8ffff375df5a870ef76e66301c8d9830",
".git/objects/07/b9fc9f5ba0574226f90fb9ee4538df1d08cff5": "66f8e97f1d23ac023f36eab3953e18d3",
".git/objects/0a/9923d5446c4eab273ed4dc85da0e544250b6e0": "1f52fe344823d86359096586cc3ba7f5",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/12/3ab5f0fec8611e6b9706704b67fb0239cbef0b": "4ed056c92f8531dea92cb73d07c35bee",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1c/3bbda402a58c945cd2040791571fceb85f04c4": "7b94e1dbc6214bf7bcff143e3793dc55",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/46a592141d7aad5753ef3a18d8e07140c0bcbd": "e708406f2346b36190c7f23d2de300c3",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/22/2ea88e110e213d5d6483c3be06d4e7e5df8fc7": "5fb4a49aa23879414d4305dfb7258fef",
".git/objects/24/7d25fb317a1fc489554dfeda056f0e8b7d122b": "80e9ab438e86346e57a400dbdfccdf84",
".git/objects/25/04fc78fb8204c720caa3cb48759b9814ab92f5": "c6696818dea62b84aae47f9fc4b33184",
".git/objects/25/5e5d53b6db09b38caa99abf09ac3e5d68fd503": "e3592560d2f82a78a0fb2180ef179ea4",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/c4e60316797c76559b09d45d21cf67d43219aa": "b50a778791a95b7aa7b25deff64a218b",
".git/objects/26/c81d5ba08c196029dcd624edbce8a0c2e1c711": "48e3b14d95c519ef7b34c310fe7824be",
".git/objects/28/c761477c28d5a23bf73eb43aa6c789a82b6286": "07c8c44e3e0f35ae6afddbd4865053ef",
".git/objects/2a/b149d7da1810f927d7b97eeb2a30a8f70f2708": "d086fcc5468eba3667484fe8dd92b160",
".git/objects/2c/e8533712f86a0484c53c4af6a9c290a3ad2efa": "c0e752b6e3b84b0dc61a1aeb4594f9dd",
".git/objects/36/4c6f836e6d520a4708033e51f4526232e18f31": "791b7d403fec80b34ebe9020cdd4ccbf",
".git/objects/36/6599251e4f8c786f0abc128a34fe02fcd5824c": "72087ba9867a55da2ce57fc4c7b53516",
".git/objects/38/24d3148608044b2c9d05922975d69f4ed683e6": "a7276918db10730ff42cdde692f18e2f",
".git/objects/39/c0034d49a18d91d00e9faf516db336b6432868": "5011bd3bf9d3615318c95e542ba24791",
".git/objects/44/050041cb07428e4abe6e071986f870d4466b95": "823d504f95eb81b1f0271fc382a34797",
".git/objects/45/c7075daad60b5d782bb8d2fefc07bc34cee9a0": "b63facdf10432e76600615a571909222",
".git/objects/45/d30d5b42d66b8d2489f1697af0044ad5ca45b6": "cb160f48c7db1fb536bd9ee3c7d0641d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/cec640708491dbcca026121b122f6c94b05c95": "44b5f4895c8da47d4d9c5eddf7134c69",
".git/objects/48/3e36b8428603d7c7c360b006db1a588d688a37": "69a525f9a9e3f83af28ac6341da39e1c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/35dd6a6d0de37e4b5d449a4b5ebe48a8ef3be6": "84028b39edbf0a58877d66900453f518",
".git/objects/4c/f34722545aa1ebc0aca500b2f553a5acb30541": "24bd74781693d2fcd351d82b70b45b12",
".git/objects/50/ece558b9f0027db1d44b06f4ce6a6c7f518a31": "cfd07f788a17904999c6d288381daa44",
".git/objects/51/3235d000b186fac14a0821b74e748e43c90d56": "a0888e121ee1ab6bb09800bd928ddcdd",
".git/objects/52/423d0649538d4b1e5be2789e907056a22dd8bc": "cf1af78fcac0a2287b6f70fa67a5c239",
".git/objects/53/f28e190cfa2f7b74c3486926635e56ae0776bc": "fdb7e16b5c741b339a9d885bbcb4bf92",
".git/objects/56/a27d5443c3ac0f3b2a8b4db04122c38954a5ba": "e94417dc52a3d4950ed4344ab356eeea",
".git/objects/56/d57e8d4f7af5781690f6fdd963636031e13cf4": "0e4a9e1358fd794972d4ab9608ce8314",
".git/objects/57/5d2d0a265994e6dc41cc44f61b91e536289daa": "2122f7e0cc34bc61491537f574406087",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5c/67fcacaa4b2657636f31913da3d7f2e2fda25a": "afd45c821db4214dcb1174934b2518ed",
".git/objects/5f/c14b88dd754fa7cc7a7e9b43d7cba89a378622": "c57001249fec986e78c8984671b8fb11",
".git/objects/60/2356d5a0a27d7263c2546eef62fe775520b59b": "8ca41198e39782bfd454b2c93f457da3",
".git/objects/62/4abc874284ccf6cfe177290f72e9061d2d7c0c": "5d213a18bf2b0b8da05185543d663d74",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/9924b96a4a8b00e4ae1f898ec6ee5086763694": "a5162b9d697378473cecd9d9e5e8694a",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6c/030e1e4f5174dc6262d7c67e867e1ed96bf74c": "ea44bb7b025819b3613889dde22eab9e",
".git/objects/6c/a9a2c6d2d343d9afd65a182ec0808aa6b79d03": "76a9348aea72dc866b331555536bf8e8",
".git/objects/6e/f7f62008c36a74f8cca3bcf3c67e1d2734cb20": "caa150aaa46288201ffc3ce2d1ce6201",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/73/1b09c0476b2044b2f2db7f980c12c8bc980c0c": "9ebeec314ba7b51bd90b1a874b01b2ad",
".git/objects/7a/62d36736e44d1e65047637dc5437b33086a980": "9efa96416ee920c7f54c9f0e7fd254e0",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/84/da81ab1299a84dd3ff7e88c6287fc1cce2ac29": "fe7dbbaa4c0d282fc4c84cb377d51406",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8b/03d9d14fc20dd653fe808c6a309718ebfde187": "600ec140526cdba29f4d2a02d059df5f",
".git/objects/8e/c4943aa8da40b23645f7e94a7424e20fa9a159": "a3f298f82ea12bab80ff5c19a37a9d1f",
".git/objects/8f/5b9ca7acfc9b04f53d37f741111027c524f83f": "9015b207093bf52ff29788235d438f0c",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/5afb63adb39219df78eb8af04dc22b56b9c052": "ed6e5c9aca3fb3fc6b911f0138bedee7",
".git/objects/98/4a780c8ddf01ce6ad1d0146948fd88241ddaea": "f7ebac923db0f7ee1805f629778754e7",
".git/objects/98/829fc9e159a57b9dac13278fb6ef7443f0328d": "40542d1f2029a257345efb1461b37d22",
".git/objects/9c/dc9c2328fc5dcfc83943bd76d849ac221de424": "fb6534a1afb0d584f5e63b2411a65034",
".git/objects/a7/d52251e7892e3c2a19be4e3446db578f286518": "0e567f8481431c1025547d467de3ea04",
".git/objects/a8/32f46457c2010ff0f3beebd044c282f34e2838": "8843fb8a2dce01b37df36795c7e02273",
".git/objects/a8/821c6b578c772665f2515d8bef6016bfb9c815": "4e5b1aa1f6cd19306f6d25ee2740e124",
".git/objects/a8/973e42b5d33a91b82d712fd684a7f4e9056ccc": "e486ff96676daf8e3acb56d8468b2e03",
".git/objects/a9/3ad435453bb2f0a681b1c57310ffb85669bb86": "d3b7c1c1b17829212476eb8350a859af",
".git/objects/a9/e5107f51bd3a84fde732e51f616676e765ec76": "f64411016722975f30024bd711da1c35",
".git/objects/aa/d906baffc08fc09074428805276ee250f8b7ac": "4ca344b099e4adaeca81c87ebba56950",
".git/objects/b0/9b26bb04f890ab09bb4afa54dbe000f841c23d": "0447e717a2a5974b6ce2ac550f8f4dc8",
".git/objects/b2/b4afeb956dc4360baf73e503e1c19aa286e078": "ad06924077cbd914a61038ca2c5af600",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/7abe2202c79148b5c69184fa59ae3ccbb40978": "6a563fa802c8ba9f3ffad1b7d2bbe326",
".git/objects/bf/4d6aa2a08a08dc8ff34d45bd01976d9d2f7723": "d6dc6b883d3d3edd193e97c48e3a3154",
".git/objects/c1/0cf635bba6603f454b587a149234971816f9b2": "a8105792cef3246cac918eabe8b1a582",
".git/objects/c7/f0bd9d6637cc9226ace2e4f3678f7ea5abd7c1": "dac8be9602855f358167edca8dafc6c5",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cc/79ca85d9e0fe47603233601fed0b5028bb9efb": "2b0721110bc6a5d511c16b7827d64029",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/5051cb706fcd1aeba8998f3e52fb22f6653bb5": "18c70bc5ff2f66a78aec81b4ea15c951",
".git/objects/d9/56a5b604dd7a7574856a95da903de8a259a067": "65a136b3653225e21feb108eb8b0167c",
".git/objects/da/4ad92594a46f2bde03289cfbd1d39af26bc2fb": "d5ceaee7609bc43cdafcca337f52cfdf",
".git/objects/db/ba9b48f397804e1c1b433efee4471a08bbda1b": "65132801a7d8152e80a8198dd95902cc",
".git/objects/dc/713151342eace07db95b8a518f43b91d2cca42": "1c55d94291fddfd0bd0a2b8372fb3c9d",
".git/objects/df/7e404735b2b0ea1ad9093cf4a9078b15ed680f": "46bf63a085e92e35c481f4781fd5aef1",
".git/objects/e0/b3e656e9f8697a0a798358fd8cad1919e94fe4": "48e8504917dc4f3c539c0ddb870dc1c0",
".git/objects/e1/c5164a0115cb929b2a3bf34279b742c260a350": "32c4c82de4be86d9be08474efc66b4af",
".git/objects/e6/229f13c4ad89a2e174995738d78eda2e176459": "2281b338faa185b5af96814b5306cbe1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/4626e9224f76c91675f5ecd5caf95b4f91e753": "eeca3de438929d8e3b60b8d35f2f52b1",
".git/objects/ef/03d80ba7d1890bb4d27bc5707436d00ac90eb7": "c3e6e4d6485140b8f22e2f3d399b5da0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/38f6518a85efb1d8bcf68e5aa0da9b31a0ba49": "c4ade289f2d0208ce5ad15b41c3854ab",
".git/objects/f4/af89b9930982f943ffa5befb428eeda93f6208": "e3b542e886cc3ba523ed1525a0b75df9",
".git/objects/f5/eb8bbfa21390dc14ffbd5fa6be7acbfec8b4e1": "f96042012beb2f65d6bb8ff491c8c70f",
".git/objects/f8/c457b7c4ded3b99f6cfb421b59cc61777f4e65": "02158f77e89bb419e6c3b5985b18e7d9",
".git/objects/fe/37aff833dcd94083252e5a2421b23222d84c25": "1dc4f7843242800b0b39fb51b49c49ff",
".git/refs/heads/main": "02025f7a178d2a3d79a88919ac5a1439",
".git/refs/remotes/origin/main": "02025f7a178d2a3d79a88919ac5a1439",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "efab61241b940867d51ce56a47f851c4",
"assets/NOTICES": "c7d0108d8323d319e57bf4f73f16a18c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "8abe2cd4c70a1981fdd692d59c7228b8",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "ace6af2683aff65324d46d7dbd679371",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "016f1a0ffa3093d95c0fd25d2c46f165",
"/": "016f1a0ffa3093d95c0fd25d2c46f165",
"main.dart.js": "2d87da165549ea6ab313e3a04410c24c",
"manifest.json": "5cd2e757921b5bb364cbf973dff9bd5a",
"version.json": "846335d1c144dc542f0f023a437da5e0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
