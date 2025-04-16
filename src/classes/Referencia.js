export default class Referencia {

	#nev;
	#megrendelo;
	#meret;
	#szinekszama;
	#darabszam;
	#papirminoseg;
	#kivitelezes;
	#tema;
	#kep;
	
	constructor(nev, megrendelo, meret, szinekszama, darabszam, papirminoseg, kivitelezes, tema, kep){
		this.setNev(nev);
		this.setMegrendelo(megrendelo);
		this.setMeret(meret);
		this.setSzinekszama(szinekszama);
		this.setDarabszam(darabszam);
		this.setPapirminoseg(papirminoseg);
		this.setKivitelezes(kivitelezes);
		this.setTema(tema);
		this.setKep(kep);
		
		this.getNev = this.getNev.bind(this);
		this.getMegrendelo = this.getMegrendelo.bind(this);
		this.getMeret = this.getMeret.bind(this);
		this.getSzinekszama = this.getSzinekszama.bind(this);
		this.getKivitelezes = this.getKivitelezes.bind(this);
		this.getTema = this.getTema.bind(this);
		this.getKep = this.getKep.bind(this);
		this.getDarabszam = this.getDarabszam.bind(this);

		
	
	}
	
	setNev(nev){
		this.#nev = nev;
	}
	getNev(){
	return this.#nev;
	}
	
	setMegrendelo(megrendelo){
		this.#megrendelo = megrendelo;
	}
	getMegrendelo(){
	return this.#megrendelo;
	}
	
	setMeret(meret){
		this.#meret = meret;
	}
	getMeret(){
	return this.#meret;
	}
	
	setSzinekszama(szinekszama){
		this.#szinekszama = szinekszama;
	}
	getSzinekszama(){
	return this.#szinekszama;
	}
	
	setPapirminoseg(papirminoseg){
		this.#papirminoseg = papirminoseg;
	}
	getPapirminoseg(){
	return this.#papirminoseg;
	}
	
	setKivitelezes(kivitelezes){
		this.#kivitelezes = kivitelezes;
	}
	getKivitelezes(){
	return this.#kivitelezes;
	}
	
	setTema(tema){
		this.#tema = tema;
	}
	getTema(){
	return this.#tema;
	}
	setDarabszam(darabszam){
		this.#darabszam = darabszam;
	}
	getDarabszam(){
	return this.#darabszam;
	}
	
	setKep(kep){
		this.#kep = kep;
	}
	getKep(){
	return this.#kep;
	}
	
}