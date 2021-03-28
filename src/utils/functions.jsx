const registerNewAccount = (id, infoObject) => {
  localStorage.setItem(id, JSON.stringify(infoObject));
};

export default registerNewAccount;
