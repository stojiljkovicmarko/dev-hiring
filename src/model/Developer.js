class Developer {
  constructor(
    name = "",
    email = "",
    phone = "",
    location = "",
    profilePic = "",
    pricePerHour = 0,
    technology = "",
    description = "",
    yearsOfExp = 0,
    nativeLang = "",
    linkedIn = ""
  ) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.location = location;
    this.profilePic = profilePic;
    this.pricePerHour = pricePerHour;
    this.technology = technology;
    this.description = description;
    this.yearsOfExp = yearsOfExp;
    this.nativeLang = nativeLang;
    this.linkedIn = linkedIn;
  }
}

export default Developer;
