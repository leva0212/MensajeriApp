'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ec0793dc064acf43a0919c9260db7cbc",
".git/config": "abb5ea4ac7a5154f8a5bfdcf22a1198d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7fd4787e78bda0955d6a0409da04d158",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3bc3fec100cd0c1601fca68a50bb736e",
".git/logs/refs/heads/main": "e0b7fb2cbdf5bcd6c4f8125f5c63522b",
".git/logs/refs/heads/master": "2adb950c4e279aafd48518c931c82a25",
".git/logs/refs/remotes/origin/main": "a9343a50a6193396b12f12681ac7c218",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/02/5c6c4c8dbb79a048fd132516ccfa627197ab1e": "7d1c523c3bfa1efa62acc91c4a6f8ff8",
".git/objects/02/7a4e103a1045353d9df5f55aac8ce6c4bb921b": "d21cf4b1a71fa04bc245a346e5f6ec22",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/03/5875005a2fac5d0b00ee7a517fd882831e1e1a": "5ced0f8f90faae33f7226d958faac69a",
".git/objects/04/9a342299ed1583ccb64ce3055030f1e06c4890": "9117d691e1ed133477bd284b9679205e",
".git/objects/08/18133833bf225f3b4fe05344f33b23165909b3": "2cb7702f91c60a19a92306e1dd4e8407",
".git/objects/08/7bc6e3bb4cda0653ac343508f714618c507717": "0fe1902b5beca66054f569f022c4e89c",
".git/objects/08/d84538ee0f9eba92c8e3ec1c26655154d34913": "75180339e6088a634f8d45bb391c9790",
".git/objects/09/a50f4ad5744ec42756586c3ded469fe04156bf": "6696787496655035dfb6f10f6e15878b",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/c4b75c160f7b68b4870af7fcde3c22f51d0a91": "714a3d77b212fe937dacf02fe84a89e5",
".git/objects/11/e442cd6f726947f0357c8f34eecaee892a727e": "a1a73dbdd4907e6fdd0fa16b94834d52",
".git/objects/14/7f852a9e7a72e968b1292a322d9a6f7477cda6": "23f871ab21ad0393755de5306ec4c987",
".git/objects/16/26a57c16d76c99457a2bcf728a893b9fb03b2f": "e5573a1f31c3569da04cdf5c09c697db",
".git/objects/17/732c6af3e23f8135c12e54c4626e21c2a811c0": "10cfef983b5d4e9bf2d060d5ba6ba5ed",
".git/objects/18/addc3680457d1ab225c0a35a55c483a69a104d": "0ea0d0dad15e35aec46b6a29bcf9abb9",
".git/objects/1b/94099510b488030c0082ccb0cc806b4e84aa19": "950eb82cbb00ff4229ad8aedb0b6adeb",
".git/objects/1f/9b949b968fa80758e1ac0423320fd0f9360389": "52e386229dbb17e3739ddbbd4305bccc",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/20/8f688013177c87a6a163e972712b50e98eaa04": "3956fb590e050e15f77204bd0faa32a0",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/24/dac5b5ae0c1a4c406e8dea801aa4641021514a": "9934ab7b9371f2eb86d5e60e4304bcf0",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/27/c06313414e22e6e493ef04b19b0a741b1ecfe7": "b73e09d5ea1995baa03473911f0078fa",
".git/objects/28/6a238ff26e166837556806ed3acd21f11ae8da": "7f00c485a203f38d192f2e210c8d98f8",
".git/objects/28/dd1f94f4cd463f938c9a4d1ccae8dff0d94633": "3eae36be3f1d0114bdf7d62969184a7e",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/31/4afdee3a390791e3a477c9d88f36aa6f5ace5a": "60075c54a8ca44928a39d7db6e423c01",
".git/objects/33/904b3b675eb9328bee0fc7073e9a9109d86b0a": "35569b0d21af8cbeaae47a4f7b0f4a76",
".git/objects/35/41412f1302b7a6403c7d12f1ac33d7006ef906": "516611542cfcdaa87fde49f157908944",
".git/objects/35/666355053946f17d600205903b6b2685f470a6": "e28c372b5fe869a39603e8c520a56247",
".git/objects/36/629035b418fd14caa06ae0d7e69eed13e57e04": "3991c5533fc82704a469cd0b60f8f6b8",
".git/objects/36/7c361b6e6cbdc9ec82d188cb0bdd4b845d30cd": "ee029d138d8ba000da329a62e0272eaa",
".git/objects/38/ca1079b19a1662e530d317fd0e6b83b44fcace": "1e240e6741e4a9056fe61643b6e3f4b1",
".git/objects/39/a1ac9ff9834ce2582fb130ba60341ea3861b52": "689d7c87c861cbb228d0339653dcdfce",
".git/objects/3b/8db8d8c11166d70f1bb6ae0e79e5194fda536b": "bef6091bd307dee4697fdcaa89407e04",
".git/objects/3c/b9cb39de1ef4ca83d575e01e467e031ce31bd6": "1638be7a0aca0915ced91383917e0368",
".git/objects/40/744f31fd453335c2efac50dc244b99e267432e": "1caffa1719f43521027420612b9dc53a",
".git/objects/42/713afa513e6285d5c48035b6fd5b6c60e792d5": "b536eeaf7b14a23036196513620502e1",
".git/objects/44/42a60ae647abb050837df6bc10f9072d320a5e": "b5d9393f287aec6b5e9d5969c2d951a8",
".git/objects/44/d95d84f7529b3766f3766f239d88a5f959d53d": "2b0f150076b9647d2a32928b798e06fc",
".git/objects/45/5b7c028a107ace810a25f962843dc03dea7185": "33078530cbccffb74d0d311ddd3bec48",
".git/objects/46/88eb3a6907331a3fab332a5d3c106dcf29d921": "57f134545814d7d6818776d8b606bfbb",
".git/objects/4c/5b6977dc9042228fa91fdd9a1266bd13dc76e7": "b89db238ac36a4a4960fd7c5e19c93ca",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/91517ed50c012b9003e1a97225b10165078604": "54d2aa4edc368cad354bb8f38487fd72",
".git/objects/50/3e99e80cf1e084efcd2162dfe0ec492a7d74bb": "649f9d2c372cf4b34e6feda3a301611f",
".git/objects/50/d9b8963ba0ac5bfd26abae8754e5547af4aea4": "4b4ebad2563778657b72b078501fc4d1",
".git/objects/53/507b1a01e515e23e54995f56d7047eeee45d6f": "afc9be793e1e22d9548fb2a723daf183",
".git/objects/57/b9df3b8fab9117d0e80cb22228f5b2d07d972b": "111a486fe1d3b8cabb4406c5d5aac17f",
".git/objects/58/6d9c617cd313ee929f43b939d351d16ee9b91c": "aa62690b88b2343f5608b91fe6b7f065",
".git/objects/5b/20e309b1f6d1576929a640f6fc2befa4bd66f6": "99032a267f06562658541f114d3fb37a",
".git/objects/5b/71128e13033b9e6c30c21735793c258809b93b": "d82a056c5df1b545529162450ad69c85",
".git/objects/5d/479fde1c494d2274bc3f45b08123a7eeb13152": "21ef343af03537b399107b797173cc43",
".git/objects/5d/9bf1431339487de560901051c498e8e753696f": "545de9efa31b6db9c985775ff88d0a8c",
".git/objects/60/b83ec72b229cd6c91985aed1c20ce51787ba11": "f681f1bc76a10305e644480eac7f07b8",
".git/objects/60/c1b5ea41e283872bba2a5c2f803f8adf784e64": "6b1c870762da75613d40c028f43735a7",
".git/objects/66/7125d344e9f63cc5409bdf4c5dfb579957a144": "e2f3f7ad1a0b728ff086cbbb8f6afbcb",
".git/objects/67/4c5c27c051289eb08c3554a4eff886cf789333": "0b2a8b6eba4d10fea65a262a80070353",
".git/objects/67/533cc8c3680ff08d49752cd4cb607ae3512634": "e9e2ad3f002cd1f3b427d40632f92f1b",
".git/objects/6a/577c68a4ed7f097a5444f3fb125fb83102cbd6": "66ebcdb9260eb7b8b1bbf35d7c85ce82",
".git/objects/6c/d76aefd20fd4da14459d699c247ef46b8dd539": "fcdf9bb30b5d46f4884b445b5a661a52",
".git/objects/6e/268d3ed1c08194869f39706fcd10bf4268127d": "bc2119031136da9f3cb19b9a05db52c0",
".git/objects/6e/a958364162f051f5d6b9b0863567ef5ec84e47": "383a60e0f901e291b72dc851b269784e",
".git/objects/70/70f1d5c8aa396bc5e641dd6d0fb234d033e652": "ad9a8ddfe8125edfe07f5ed6a498c0ad",
".git/objects/70/897db9ec1c34fdfd96943db36e23a51f42e197": "e34ab7c3255f0d2b84f0b62dff8f8a09",
".git/objects/70/e591742999c2cd8b51b231c736d8bdaee0578e": "87b3c33b293f56fc3a890a91ac23bf33",
".git/objects/72/810583cbb72427e46556c507e930063f1c2ed2": "06bae75320ad99eda1ae62bf32d9a28e",
".git/objects/75/1d0dffe08dba521b41f5ed33bf2f68d1e8737d": "20d24d7fd482c172d4d5f44616aea6e9",
".git/objects/75/9ce388753a436f40b75f574d1377077a7a40ec": "22405202bcf8e16da18d3b49990c9820",
".git/objects/76/020c5be0f98b6a57794f31d94274ffa5005e36": "dbb25d322c4c3502d4a564f1729584e9",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/77/2df7ea427ab5c678fe2c779bda2180d3ad5185": "b4764cf82c72f2c978e3ad22241d553c",
".git/objects/77/ccdb7c10e0e53eaa9fba8cc3af5ea29a62c721": "80b2bb48702cbeddd8ef72b0118a839f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/80/7b41d6205238460ea2d98f5f2abea7d1614b91": "35878ed6d0827c443def641335065b4f",
".git/objects/81/d0e900d94030739a0f306d8db61b5ad9d511e5": "0d967ca468a16d01142299c8526a1136",
".git/objects/83/e2c453f4520de0f3de76fdf9baaf7a100cbf21": "6b2082ec6dcebd2edeb7f37481707c7d",
".git/objects/84/67b2a021ec3e445e436a9714d252a8d4cfd50a": "f73f8927b12801ccbce3ad4261b40272",
".git/objects/87/3503f261723ef74fdf555d77ae0356809ae65d": "295337b75506ff1826584fe38ad11687",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/e1d5ed05e3f79c8b2825d1ba6ca92601f372e3": "e093213e9ab78891d4d72e696392ae1f",
".git/objects/89/8c454fb6fe50c7f05cdc2db89df05001d7789a": "f59660eb83869db55bb29a29b3834420",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/8b/a8d5c97e832fbc94ca74d4d059f1093586bf1d": "49f0b525f3b4ead270b4a5ed630ba776",
".git/objects/92/2822cb47c707802d8aba4fb219336686d545c0": "434f176e9ade2c0008c59e618561c43b",
".git/objects/93/b576d00c1b8148ffcd1429f5d7c2778e503eb7": "875165644cc44299bd67d3cdc2a26257",
".git/objects/9a/e6605017062b06fc1747be0cff86b46d919f4e": "2a7a9a4e59334bfd1bdc7db29f709bb8",
".git/objects/9b/5f95b8591846e1b096813de5c1311e15a1b27d": "e14d45b459d6c244b713bc9a31a7dc39",
".git/objects/9f/c2a622c29a3e77c7e4e48f621ea4796b158b12": "efe7712751ea10e0d4211fd20f9f7c65",
".git/objects/a0/dac6c55959ee422607bf7d3bb87fde51a89c76": "a49d1060c354cb677a59cf452591e768",
".git/objects/a0/fb71bfbc486fc34cfbee5f504658953bdae86e": "463dba6b6030d0bb1b08b41688362fb2",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/f22b9d31ef3f57a02978bbb7d05500c6fc415a": "b1653e19a79ca36b97134e8815b61eab",
".git/objects/a5/64ded5dacf658b4e31d26880cd4285b0e7e34d": "e17c5327fb4394293e28550131e72c60",
".git/objects/a5/d1e3c928dbece36241ecc3c1f734292ca6088d": "375c3f9a78b5484e0be49c5dcb6e2ce9",
".git/objects/a7/dab33e1295b8e6d8e2811da67a7a6cc9032eb2": "5a929d4e94cc87332e7d1d10159af65a",
".git/objects/a7/e167974de9f24907a83ce2c79c9106eab558bc": "a202974ac35e0067bcd082ac42b3340c",
".git/objects/a8/67ed06fcd6fcc2f1f5ed92da7a74bfee7dd161": "6dad84cdfb98466013388613aee33e3f",
".git/objects/aa/9f93426761e7440403246c47bfebb4bc6b86af": "fea358826dcc09c79365115af50dbbc9",
".git/objects/b0/b8262cda4603c4d44b4e681d8d31d42655b856": "eec535bdf010260e4f72a97b7a806dc0",
".git/objects/b3/56cf4c25275799729d0650a9ab78faba019950": "559f559f77f05c7d0658ecd112e9d745",
".git/objects/b3/bf21898d46df481620b3584ce36ac8de8592a9": "ae466448d4ddb3716f86ef9a24ee9841",
".git/objects/b5/8b0d16285c9c01dcb3ec460b9b9b57414ea531": "fa078fb9900f67be1f8fbb2e906a888e",
".git/objects/b6/6cfbc8d7101d6dd629bc2bc4b4077d6581b788": "71a72daea244936a44d275ef9d519ba4",
".git/objects/b6/8122cd206955f51f720168b555d1c3098e6fa2": "bf233978b853a35794ab2f58945238e1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/ce5750ebdc02aa2a0e543919f43d34043478dc": "8e117325c002c37475ea8e7934222d9c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8b4e6ae570a4bd324fef051c9a77836354a7ed": "0e94fb0f49f3c2226d84e3a51b606ee8",
".git/objects/bb/c883e19062ee0a0e69e4b6d3abfa2ce30f2bf0": "ce5ffc0e6aa26338f427a069b659c2c7",
".git/objects/be/a16f0e4f43a8a373aa01f9935f3b8d1bffe163": "2ba6037f9949632516c63da2dababfe9",
".git/objects/bf/32a0d2d524bee78073d8644275e03d00fbfd05": "88148045cec9ab833f5cf944cfd1705c",
".git/objects/c4/fc24f4388024a06a3aeda64118ba3ecd725d95": "05be1d0285992804c95a15399192f36a",
".git/objects/c6/4e4272f864159f692c6f67af3c78571a701880": "ab9f27616f78fbc4076c1b81a0183ae2",
".git/objects/c8/5f505ec6be348d7c350866b4fdeeae6d0de31e": "d67491716fda44432cdfafe46662308a",
".git/objects/ca/f7566d794e6bfc4f184ee22a6c81a24b890729": "d1eb6b97df5fc0915c5218e308121053",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/afa827ac344c5898d62e451e957ec743c66cbe": "349b74faf3c5d1e60a1b3bcc1621af30",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/d1/cbd6cb47d172dea6692d54d3a25e55a89ee7dc": "c743e0734dfbbc1af683700c98b6560f",
".git/objects/d5/38ee25104088f8230ce5114806d07492d15f2d": "cdab6109495fd79d22d5b47dc9f47f7a",
".git/objects/d5/ca192ffa40703ec2c305b7229841f3beee9bc0": "e151bb52caab56a6d1b081017c6664be",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/465b2c9d9707a9ce0f76c90033d7f317d3f94a": "7af4b39da3926f4255f618720a1536e3",
".git/objects/dd/0883d806b7c88983a324529094c25dfb52bcbc": "b18737b6e93f995739ff1a63051babe6",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/5b12b92abe357adff02786c4153f95e5ba800d": "203129d3405d09de5be5669117a21dd4",
".git/objects/df/5215878f0e9668e14a2a86673c95e0a56da07e": "e9ba56eba98eb6275902e35e73ddf51e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/b1efdb2b81fe0b2dfee4424b8ad8385a735633": "4bada513a22ddd64fd77d6c9f8e19354",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/80177286c2e11cd62241bde16f32cb1a29db91": "8b9d2417363b64b07200111f3aa4c0ff",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/edb2eb1baad194778e29bb377016bf83e101b2": "c10919d32eb6a7c1969500232bd38c5a",
".git/objects/f0/b314f498e68504e89dcf36fec8c39434d84385": "b748e1ba1b73e0a840d00ec45f591f13",
".git/objects/f0/d8dee440df6805d4de7e6f8f548aad1dd6bc6e": "10ac68730828551e4fc11ac945d349ec",
".git/objects/f1/24b1be4ce3be45dbf068f390b592437d361122": "c79636086d266f15bd6f089600293952",
".git/objects/f2/ab498af0fbcd41bf85833e582d7fb073755351": "30fa93fce5db68fadf2835eef886255f",
".git/objects/f2/d62a46bd4fc70d0edeb7e223a4b42428307d56": "303c89e776cd1b22b1ff8c996323713a",
".git/objects/f3/2a1325e1da1bee04dd94556485a5d2b7806ced": "e221c7c31d85725e218922676006e313",
".git/objects/f4/959716a2e845f028f26bc28b4f0ea7cb940a2d": "917994b0055dd2eeede9a9be7df358c8",
".git/objects/fe/8a0d0893fb977aae8d6e6633f736bab87c1019": "55324cc4e700072999eaa9c669acd04b",
".git/refs/heads/main": "78e86622a18b0cf1332bc0fed69237ce",
".git/refs/heads/master": "a846992c83051fe7949fb75de5d69296",
".git/refs/remotes/origin/main": "78e86622a18b0cf1332bc0fed69237ce",
"assets/AssetManifest.json": "59c08a2cf7ff625f202ff3c421596dfc",
"assets/FontManifest.json": "9ca5dcfcd70a3310e33da7169e2df95e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "7e069d5436c24c4dd8a74d761d22f6ef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutterfire_ui/assets/countries.json": "8c937aac9f3b69162be779fbcd6199d2",
"assets/packages/flutterfire_ui/assets/fonts/SocialIcons.ttf": "a1207fae1578da27a062cb73d424aed9",
"assets/packages/flutterfire_ui/assets/icons/apple_dark.svg": "1b587ffd7d75c462847f8137a93f3161",
"assets/packages/flutterfire_ui/assets/icons/apple_light.svg": "2508cc7c5d302fd37edff1b87fedb594",
"assets/packages/flutterfire_ui/assets/icons/facebook.svg": "5fad3daafe7c7c5163fca56662d2738a",
"assets/packages/flutterfire_ui/assets/icons/google.svg": "3b5ceaea5e2391782d39df225a375d5d",
"assets/packages/flutterfire_ui/assets/icons/twitter.svg": "6086e2aad26effea1344c8e118520e32",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4657a55c22d4f99e8aadafbfdb6fd5b1",
"/": "4657a55c22d4f99e8aadafbfdb6fd5b1",
"main.dart.js": "ce3f0135352ae51d490f526dfd8463e1",
"manifest.json": "93b2247fd1d20b665e3e280599b4293a",
"splash/img/dark-1x.png": "f8e53551a772e511d2174effc3107fb8",
"splash/img/dark-2x.png": "1eb7436a1929438d7effbac4560b343d",
"splash/img/dark-3x.png": "dc4caea6989fcc374c94b75ea044cbfc",
"splash/img/dark-4x.png": "ca4b594251f34cb7101b6b1b814b5cff",
"splash/img/light-1x.png": "f8e53551a772e511d2174effc3107fb8",
"splash/img/light-2x.png": "1eb7436a1929438d7effbac4560b343d",
"splash/img/light-3x.png": "dc4caea6989fcc374c94b75ea044cbfc",
"splash/img/light-4x.png": "ca4b594251f34cb7101b6b1b814b5cff",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "db6178791b6369b77311c0ae92809585",
"version.json": "39f820f20c5bd924b2f96a32b0457f8d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
