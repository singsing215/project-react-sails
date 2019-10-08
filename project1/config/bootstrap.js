/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return;
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```
  if (await Rent.count() > 0) {
    return done();
}

await Rent.createEach([
    { title: "半山自住品味靚裝-三房兩廁-中高層開揚景觀", eatate:"Robinson Heights", url: "https://i1.28hse.com/2019/09/938689_2019094721.jpg", bedroom:3, area:899, tenant:5, rent:43000 },
    { title: "銅鑼灣2房2廳。即租即住。優質罕盤。", eatate:"Hoi deen Court", url:"https://i1.28hse.com/2019/10/951089_2019104698.jpg", bedroom:2, area:700, tenant:3, rent:26500 },
    { title: "形品星寓。3分鐘到地鐵站", eatate:"Lime Stardom", url:"https://i1.28hse.com/2019/09/930790_2019095031.jpg", bedroom:1, area:390, tenant:2, rent:19000 },
    { title: "中上環服務式住宅 2分鐘到地鐵", eatate:"AKVO Hotel", url:" https://i1.28hse.com/2019/10/955789_2019101877.jpg", bedroom:1, area:605, tenant:2, rent:35000 }
    // etc.
]);



};
