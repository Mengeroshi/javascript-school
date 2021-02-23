

    const zelda  = {
        name: 'Zelda',
    }

    zelda.saludar = function(){
        console.log(`Hola soy ${this.name}`)
    }

    zelda.saludar()

function Hero (name){
    const hero = {
        name: name,
    }
    hero.saludar = function(){
        console.log(`Hola soy ${this.name}`)
    }
    return hero;
}

const link = Hero('Link');
link.saludar()


//object create
const heroMethods = {
    saludar: function(){
        console.log(`Soy el heroe ${this.name}`)
    }
}

function Hero2 (name){
    const hero = Object.create(heroMethods)
    hero.name = name;
    return hero;
}

const link2 = Hero2('Link!!!!')

link2.saludar()


