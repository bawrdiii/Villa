export default async function API(option, address) {
  const host = "https://bsite.net/aradshamsi26/api/account/";
  const response = await fetch(host + address, option);

  const data = await response.json();

  const status = response.status;
  var ret = { status, data };
  return ret;
}
