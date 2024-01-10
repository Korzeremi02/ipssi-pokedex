    // ALL IMPORTS
    import '../styles/Home.scss'
    import React, { useState, useEffect } from 'react';
    import axios from "axios"; 
    import pokeball from '../assets/pokeball.png'
    import uncaught from '../assets/uncaught.png'
    import caught from '../assets/logo.png'
    import fire from '../assets/types/fire.png'
    import fight from '../assets/types/fight.png'
    import psy from '../assets/types/psy.png'
    import poison from '../assets/types/poison.png'
    import dragon from '../assets/types/dragon.png'
    import ghost from '../assets/types/ghost.png'
    import dark from '../assets/types/dark.png'
    import ground from '../assets/types/ground.png'
    import fairy from '../assets/types/fairy.png'
    import water from '../assets/types/water.png'
    import fly from '../assets/types/fly.png'
    import bug from '../assets/types/bug.png'
    import normal from '../assets/types/normal.png'
    import rock from '../assets/types/rock.png'
    import electric from '../assets/types/electric.png'
    import grass from '../assets/types/grass.png'
    import ice from '../assets/types/ice.png'
    import steel from '../assets/types/steel.png'
    import load from '../assets/load.gif'
    import music from '../assets/music.mp3'
    import mute from '../assets/mute.png';

    export default function Home() {
        // ALL GETTER & SETTER
        const [pkImg, setPkImg] = useState('');
        const [pkName, setPkName] = useState('');
        const [pkId, setPkId] = useState('');
        const [pkType1, setPkType1] = useState('');
        const [pkType2, setPkType2] = useState('');
        const [pkStats, setPkStats] = useState('');
        const [pkDescription, setPkDescription] = useState('');
        const [pkArray, setPkArray] = useState([]);
        const [isLoading, setIsLoading] = useState(true);
        const [searchQuery, setSearchQuery] = useState('');
        const [currentAlpha, setCurrentAlpha] = useState(false);
        const [currentID, setCurrentID] = useState(true);
        const [currentType, setCurrentType] = useState(false);
        const [isPopupOpen, setPopupOpen] = useState(false);
        const [loadingPercent, setLoadingPercent] = useState(0);


        useEffect(() => {
            // IF THERE'S A POKEMON IN THE LOCAL STORAGE, THEN WE DON'T PUSH IT (AVOID DUPES)
            if (!localStorage.getItem('selectedPokemon')) {
                localStorage.setItem('selectedPokemon', '[]');
            }


            const fetchData = async () => {
                const totalPokemonCount = 1018;
                const tempPkArray = [];

                // LOOP WITH OUR REQUESTS, WHICH ARE SPLIT INTO 5 TO REDUCE LOADING TIMES
                for (let current = 1; current < 250; current++) {
                    // REQUEST FOR INFORMATION ON ALL POKEMONS
                    const url = `https://pokeapi.co/api/v2/pokemon/${current}`;
                    const response = await axios.get(url);

                    // STORE INFORMATION OF INTEREST IN VARIABLES
                    const { name, id, sprites, types, stats} = response.data;
                    const officialArtworkURL = sprites.other['official-artwork'].front_default;

                    // REQUEST FOR DESCRIPTIONS FOR THE FIRST 30 POKEMONS
                    const url2 = `https://pokeapi.co/api/v2/characteristic/${current}`;
                    let description;
                    let response2;

                    // POKEMONS ABOVE 31 DON'T HAVE DESCRIPTIONS, SO WE ONLY COLLECT THEM AND PUT "UNKNOWN" ON THE OTHERS.
                    if (current >= 31) {
                        description = "Unknown"
                    } else {
                        response2 = await axios.get(url2);
                        description = response2.data.descriptions[7].description;
                    }

                    // PUSH ALL INFORMATIONS IN AN ARRAY
                    tempPkArray.push({
                    id,
                    name,
                    types,
                    stats,
                    description,
                    img: officialArtworkURL,
                    });

                    const newLoadingPercentage = Math.round((current / totalPokemonCount) * 10);
                    setLoadingPercent(newLoadingPercentage);
                }

                // SAME
                for (let current = 250; current < 500; current++) {
                    const url = `https://pokeapi.co/api/v2/pokemon/${current}`;
                    const response = await axios.get(url);
                    const { name, id, sprites, types, stats } = response.data;
                    const officialArtworkURL = sprites.other['official-artwork'].front_default;
                    const url2 = `https://pokeapi.co/api/v2/characteristic/${current}`;
                    let description;
                    let response2;

                    if (current >= 31) {
                        description = "Unknown"
                    } else {
                        response2 = await axios.get(url2);
                        description = response2.data.descriptions[7].description;
                    }
                    tempPkArray.push({
                    id,
                    name,
                    types,
                    stats,
                    description,
                    img: officialArtworkURL,
                    });

                    const newLoadingPercentage = Math.round((current / totalPokemonCount) * 10);
                    setLoadingPercent(newLoadingPercentage);
                }

                // SAME
                for (let current = 500; current < 750; current++) {
                    const url = `https://pokeapi.co/api/v2/pokemon/${current}`;
                    const response = await axios.get(url);
                    const { name, id, sprites, types, stats } = response.data;
                    const officialArtworkURL = sprites.other['official-artwork'].front_default;
                    const url2 = `https://pokeapi.co/api/v2/characteristic/${current}`;
                    let description;
                    let response2;

                    if (current >= 31) {
                        description = "Unknown"
                    } else {
                        response2 = await axios.get(url2);
                        description = response2.data.descriptions[7].description;
                    }
                    tempPkArray.push({
                    id,
                    name,
                    types,
                    stats,
                    description,
                    img: officialArtworkURL,
                    });

                    const newLoadingPercentage = Math.round((current / totalPokemonCount) * 10);
                    setLoadingPercent(newLoadingPercentage);
                }

                // SAME
                for (let current = 750; current < 1018; current++) {
                    const url = `https://pokeapi.co/api/v2/pokemon/${current}`;
                    const response = await axios.get(url);
                    const { name, id, sprites, types, stats } = response.data;
                    const officialArtworkURL = sprites.other['official-artwork'].front_default;
                    const url2 = `https://pokeapi.co/api/v2/characteristic/${current}`;
                    let description;
                    let response2;

                    if (current >= 31) {
                        description = "Unknown"
                    } else {
                        response2 = await axios.get(url2);
                        description = response2.data.descriptions[7].description;
                    }
                    tempPkArray.push({
                    id,
                    name,
                    types,
                    stats,
                    description,
                    img: officialArtworkURL,
                    });

                    const newLoadingPercentage = Math.round((current / totalPokemonCount) * 10);
                    setLoadingPercent(newLoadingPercentage);
                }

                // SAME
                for (let current = 10001; current < 10264; current++) {
                    const url = `https://pokeapi.co/api/v2/pokemon/${current}`;
                    const response = await axios.get(url);
                    const { name, id, sprites, stats } = response.data;
                    const officialArtworkURL = sprites.other['official-artwork'].front_default;
                    const url2 = `https://pokeapi.co/api/v2/characteristic/${current}`;
                    let description;
                    let response2;

                    if (current >= 31) {
                        description = "Unknown"
                    } else {
                        response2 = await axios.get(url2);
                        description = response2.data.descriptions[7].description;
                    }
                    tempPkArray.push({
                    id,
                    name,
                    stats,
                    description,
                    img: officialArtworkURL,
                    });

                    const newLoadingPercentage = Math.round((current / totalPokemonCount) * 10 -1);
                    setLoadingPercent(newLoadingPercentage);
                }

                // SET POKEMON ARRAY WITH TEMP ARRAY & FINISH LOADER
                setPkArray(tempPkArray);
                setIsLoading(false);
                
                
            };
        
        fetchData();
    }, []);
    
    const tempStatus = JSON.parse(localStorage.getItem('selectedPokemon'));
    const audio = document.getElementById('player');

    // MUSIC GESTION
    let musicState = "true";
    const Musicmanager = () => {
        if (musicState === "true") {
            musicState = "false";
            audio.pause();
            audio.volume = 0.5;
        } else {
            musicState = "true";
            audio.play(); 
            audio.volume = 0.5;
        }
    };


    // FILTER FOR THE SEARCHBAR
    const filteredPokemon = pkArray.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    // SORTING BY ALPHABETICAL ORDER
    const FilteredAlpha = () => {
        const sortedPokemon = [...filteredPokemon];

        if (currentAlpha === false) {
            sortedPokemon.sort((a, b) => {
                if (a.name < b.name) {
                    setCurrentAlpha(true)
                    return -1;
                }
                if (a.name > b.name) {
                    setCurrentAlpha(true)
                    return 1;
                }
                setCurrentAlpha(true)
                return 0;
            });
        } else if (currentAlpha === true){
            sortedPokemon.sort((a, b) => {
                if (a.name < b.name) {
                    setCurrentAlpha(false);
                    return 1;
                }
                if (a.name > b.name) {
                    setCurrentAlpha(false);
                    return -1;
                }
                setCurrentAlpha(false);
                return 0;
            });
        }

        setPkArray(sortedPokemon);
    };

    // SORTING BY ID ORDER
    const FilteredID = () => {
        const sortedPokemon = [...filteredPokemon];

        if (currentID === false) {
            sortedPokemon.sort((a, b) => {
                if (a.id < b.id) {
                    setCurrentID(true)
                    return -1;
                }
                if (a.id > b.id) {
                    setCurrentID(true)
                    return 1;
                }
                setCurrentID(true)
                return 0;
            });
        } else if (currentID === true){
            sortedPokemon.sort((a, b) => {
                if (a.id < b.id) {
                    setCurrentID(false)
                    return 1;
                }
                if (a.id > b.id) {
                    setCurrentID(false)
                    return -1;
                }
                setCurrentID(false)
                return 0;
            });
        }

        setPkArray(sortedPokemon);
    };

    // SORTING BY TYPES ORDER
    const FilteredType = () => {
        const sortedPokemon = [...filteredPokemon];
        sortedPokemon.sort((a, b) => {
            let atype = (a.types && a.types[0]) ? a.types[0].type.name : "";
            let btype = (b.types && b.types[0]) ? b.types[0].type.name : "";

            if (currentType === false) {
                if (atype < btype) {
                    setCurrentType(true)
                    return -1;
                }
                if (atype > btype) {
                    setCurrentType(true)
                    return 1;
                }
                setCurrentType(true)
                return 0;
            } else if (currentType === true) {
                if (atype < btype) {
                    setCurrentType(false)
                    return 1;
                }
                if (atype > btype) {
                    setCurrentType(false)
                    return -1;
                }

                setCurrentType(false)
                return 0;
            }
        });
        
        setPkArray(sortedPokemon);
        };
          
          
    
    // SET ALL DATA FOR POPUP DISPLAYS
    const openPopup = (pokemon) => {
        setPopupOpen(true);
        setPkImg(pokemon.img);
        setPkName(pokemon.name);
        setPkId(pokemon.id);
        setPkType1(pokemon.types[0].type.name);
        if (pokemon.types.length > 1) {
            setPkType2(pokemon.types[1].type.name);
        } else {
            setPkType2("")
        }
        setPkStats(pokemon.stats)
        setPkDescription(pokemon.description)
    };

    // CLOSE POPUP
    const closePopup = () => {
        setPopupOpen(false);

    };

    // ADD POKEMON IN THE POKEDEX
    const addPkToLocalStorage = (pokemon) => {
        let storedData = localStorage.getItem('selectedPokemon');
        if (!storedData) {
            storedData = [];
        } else {
            storedData = JSON.parse(storedData);
        }
        
        // VERIFY IF IT'S ALREADY IN THE POKEDEX 
        const isAlreadyAdded = storedData.some((item) => item.id === pokemon.id);

        // SI IL N'EST PAS DANS LE POKEDEX ALORS ON L'AJOUTE
        if (!isAlreadyAdded) {
            storedData.push({
            name: pokemon.name,
            img: pokemon.img,
            id: pokemon.id,
            })
        
        localStorage.setItem('selectedPokemon', JSON.stringify(storedData));
        };
    }

    // SET TEMPORARY IMAGES AND CLASSES FOR POPUP TYPE DISPLAY

    let classType1;
    let classType2;
    let imgType1;
    let imgType2;

    switch(pkType1) {
        case "bug":
            classType1 = "bug";
            imgType1 = bug
            break;
        case "fighting":
            classType1 = "fight";
            imgType1 = fight
            break;
        case "psychic":
            classType1 = "psy";
            imgType1 = psy
            break;
        case "poison":
            classType1 = "poison";
            imgType1 = poison
            break;
        case "dragon":
            classType1 = "dragon";
            imgType1 = dragon
            break;
        case "ghost":
            classType1 = "ghost";
            imgType1 = ghost
            break;
        case "dark":
            classType1 = "dark";
            imgType1 = dark
            break;
        case "ground":
            classType1 = "ground";
            imgType1 = ground
            break;
        case "fire":
            classType1 = "fire";
            imgType1 = fire
            break;
        case "fairy":
            classType1 = "fairy";
            imgType1 = fairy
            break;
        case "water":
            classType1 = "water";
            imgType1 = water
            break;
        case "flying":
            classType1 = "fly";
            imgType1 = fly
            break;
        case "normal":
            classType1 = "normal";
            imgType1 = normal
            break;
        case "steel":
            classType1 = "steel";
            imgType1 = steel
            break;
        case "rock":
            classType1 = "rock";
            imgType1 = rock
            break;
        case "electric":
            classType1 = "electric";
            imgType1 = electric
            break;
        case "grass":
            classType1 = "grass";
            imgType1 = grass
            break;
        case "ice":
            classType1 = "ice";
            imgType1 = ice
            break;
        default:
            classType1 = "";
            imgType1 = "";
    }

        switch(pkType2) {
            case "bug":
                classType2 = "bug";
                imgType2 = bug
                break;
            case "fight":
                classType2 = "fight";
                imgType2 = fight
                break;
            case "psychic":
                classType2 = "psy";
                imgType2 = fight
                break;
            case "poison":
                classType2 = "poison";
                imgType2 = poison
                break;
            case "dragon":
                classType2 = "dragon";
                imgType2 = dragon
                break;
            case "ghost":
                classType2 = "ghost";
                imgType2 = ghost
                break;
            case "dark":
                classType2 = "dark";
                imgType2 = dark
                break;
            case "ground":
                classType2 = "ground";
                imgType2 = ground
                break;
            case "fire":
                classType2 = "fire";
                imgType2 = fire
                break;
            case "fairy":
                classType2 = "fairy";
                imgType2 = fairy
                break;
            case "water":
                classType2 = "water";
                imgType2 = water
                break;
            case "flying":
                classType2 = "fly";
                imgType2 = fly
                break;
            case "normal":
                classType2 = "normal";
                imgType2 = normal
                break;
            case "steel":
                classType2 = "steel";
                imgType2 = steel
                break;
            case "rock":
                classType2 = "rock";
                imgType2 = rock
                break;
            case "electric":
                classType2 = "electric";
                imgType2 = electric
                break;
            case "grass":
                classType2 = "grass";
                imgType2 = grass
                break;
            case "ice":
                classType2 = "ice";
                imgType2 = ice
                break;
            default:
                classType2 = "";
                imgType2 = "";
        }

        return (
            <div className='content'>
                {isPopupOpen && (
                    <div className="popup">
                        <div className="popup-content">
                            <span onClick={closePopup} className="close-popup">
                            &times;
                            </span>
                            <div className="popup-left">
                                <div className="popup-image">
                                    <img src={pkImg} alt={pkName} />
                                </div>
                                <div className="stats-popup">
                                    <div className="row">
                                        <div className="text-stats">
                                            <p>STA</p>
                                        </div>
                                        <div id="bar-stats">
                                            <div id="bar-achieve" className={ classType1} style={{ width: `${pkStats[0].base_stat}%` }}></div>
                                        </div>
                                        <div className="text-stats">
                                            <p>{pkStats[0].base_stat}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="text-stats">
                                            <p>ATK</p>
                                        </div>
                                        <div id="bar-stats">
                                            <div id="bar-achieve" className={ classType1} style={{ width: `${pkStats[1].base_stat}%` }}></div>
                                        </div>
                                        <div className="text-stats">
                                            <p>{pkStats[1].base_stat}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="text-stats">
                                            <p>A.SPE</p>
                                        </div>
                                        <div id="bar-stats">
                                            <div id="bar-achieve" className={ classType1} style={{ width: `${pkStats[2].base_stat}%` }}></div>
                                        </div>
                                        <div className="text-stats">
                                            <p>{pkStats[2].base_stat}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="text-stats">
                                            <p>DEF</p>
                                        </div>
                                        <div id="bar-stats">
                                            <div id="bar-achieve" className={ classType1} style={{ width: `${pkStats[3].base_stat}%` }}></div>
                                        </div>
                                        <div className="text-stats">
                                            <p>{pkStats[3].base_stat}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="text-stats">
                                            <p>D.SPE</p>
                                        </div>
                                        <div id="bar-stats">
                                            <div id="bar-achieve" className={ classType1} style={{ width: `${pkStats[4].base_stat}%` }}></div>
                                        </div>
                                        <div className="text-stats">
                                            <p>{pkStats[4].base_stat}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="popup-details">
                                <div className="popup-name">
                                    <h2>{pkName}</h2>
                                </div>
                                <div className="popup-types">
                                    <div id="type" className={classType1 }>
                                        <p>{ pkType1 }</p>
                                        <img src={imgType1} alt="" />
                                        </div>
                                    <div id="type" className={classType2}>
                                        <p>{ pkType2 }</p>
                                        <img src={imgType2} alt="" />
                                        </div>
                                </div>
                                <div className="popup-description">
                                    <p>POKEDEX : { pkId }</p>
                                    <br/>
                                    <p>{ pkDescription }.</p>
                                </div> 
                                <div className="popup-attacks">
                                    <div id="attacks" className={ classType1 }>Low Kick</div>
                                    <div id="attacks" className={ classType1 }>Heat Wave</div>
                                    <div id="attacks" className={ classType1 }>Nightmare</div>
                                    <div id="attacks" className={ classType1 }>Brick Break</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className='audio-btn' onClick={Musicmanager}>
                        <img src={mute} alt="" />
                        {/* <audio autoPlay id="player" src={music} loop></audio> */}
                </div>
                <div className="searchbar">
                    <img src={ pokeball } alt="" />
                    <input type="text" placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                </div>
                <div className="filter">
                    <div className="alpha" id='btn' onClick={FilteredAlpha}>
                        <p>Alphabetics</p>
                    </div>
                    <div className="type" id='btn' onClick={FilteredType}>
                        <p>Type</p>
                    </div>
                    <div id='btn' onClick={FilteredID}>
                        <p>ID</p>
                    </div>
                    <div className='audio-btn' onClick={Musicmanager}></div>
                        <audio autoPlay id="player" src={music} loop></audio>
                    </div>
                {isLoading ? (
                    <div className="loading">
                        <div className="load-title">
                            {`Pokemons coming... ${loadingPercent}%`}
                        </div>
                        <div className="load-gif">
                            <img src={load} className="gif-logo" alt="load" />
                        </div>
                    </div>
                ) : (
                <div className="container">
                    {searchQuery === '' ? (
                        pkArray.map((pokemon, index) => (
                            <div className="cards">
                                <div className="pp" onClick={() => openPopup(pokemon)} key={index}>
                                    <img src={pokemon.img} alt={pokemon.name} />
                                </div>
                                <div className="details">
                                    <div className="name">
                                    <div className='btn-add' onClick={() => addPkToLocalStorage(pokemon)}>  
                                        <img src={tempStatus.some(item => item.id === pokemon.id) ? caught : uncaught} alt="" />  
                                    </div>
                                        <p>{pokemon.name}</p>
                                </div>
                                <div className="number">
                                    <p>{pokemon.id}</p>
                                </div>
                            </div>
                    </div>
                    ))
                    ) : (
                        filteredPokemon.map((pokemon, index) => (
                            <div className="cards">
                            <div className="pp" onClick={() => openPopup(pokemon)} key={index}>
                                <img src={pokemon.img} alt={pokemon.name} />
                            </div>
                            <div className="details">
                                    <div className="name">
                                    <div className='btn-add' onClick={() => addPkToLocalStorage(pokemon)}>  
                                        <img src={tempStatus.some(item => item.id === pokemon.id) ? caught : uncaught} alt="" />  
                                    </div>
                                        <p>{pokemon.name}</p>
                                </div>
                            </div>
                            <div className="number">
                                <p>{pokemon.id}</p>
                            </div>
                        </div>
                    )))}
                </div>
                )}
            </div>
        )
    }