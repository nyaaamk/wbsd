--
-- PostgreSQL database dump
--

-- Dumped from database version 12.22 (Ubuntu 12.22-0ubuntu0.20.04.4)
-- Dumped by pg_dump version 12.22 (Ubuntu 12.22-0ubuntu0.20.04.4)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE universe;
--
-- Name: universe; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE universe WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE universe OWNER TO freecodecamp;

\connect universe

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: asteroid; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.asteroid (
    asteroid_id integer NOT NULL,
    galaxy_id integer,
    name character varying(255) NOT NULL,
    diameter_km double precision,
    composition character varying(100),
    discovery_date date,
    is_potentially_hazardous boolean DEFAULT false,
    description text
);


ALTER TABLE public.asteroid OWNER TO freecodecamp;

--
-- Name: asteroid_asteroid_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.asteroid_asteroid_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.asteroid_asteroid_id_seq OWNER TO freecodecamp;

--
-- Name: asteroid_asteroid_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.asteroid_asteroid_id_seq OWNED BY public.asteroid.asteroid_id;


--
-- Name: galaxy; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.galaxy (
    galaxy_id integer NOT NULL,
    name character varying(100) NOT NULL,
    description text,
    has_life boolean DEFAULT false,
    age_in_billion_years numeric(5,2),
    distance_from_earth_light_years bigint,
    age_in_int integer,
    approximate_degree integer
);


ALTER TABLE public.galaxy OWNER TO freecodecamp;

--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.galaxy_galaxy_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.galaxy_galaxy_id_seq OWNER TO freecodecamp;

--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.galaxy_galaxy_id_seq OWNED BY public.galaxy.galaxy_id;


--
-- Name: moon; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.moon (
    moon_id integer NOT NULL,
    planet_id integer,
    name character varying(100) NOT NULL,
    type character varying(50),
    mass_earth_masses numeric(10,4),
    radius_earth_radii numeric(10,4),
    orbital_period_days numeric(10,4)
);


ALTER TABLE public.moon OWNER TO freecodecamp;

--
-- Name: moon_moon_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.moon_moon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.moon_moon_id_seq OWNER TO freecodecamp;

--
-- Name: moon_moon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.moon_moon_id_seq OWNED BY public.moon.moon_id;


--
-- Name: planet; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.planet (
    planet_id integer NOT NULL,
    star_id integer,
    name character varying(100) NOT NULL,
    type character varying(50),
    mass_earth_masses numeric(10,4),
    radius_earth_radii numeric(10,4),
    orbital_period_days numeric(10,4),
    has_satellite boolean DEFAULT false
);


ALTER TABLE public.planet OWNER TO freecodecamp;

--
-- Name: planet_planet_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.planet_planet_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.planet_planet_id_seq OWNER TO freecodecamp;

--
-- Name: planet_planet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.planet_planet_id_seq OWNED BY public.planet.planet_id;


--
-- Name: star; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.star (
    star_id integer NOT NULL,
    galaxy_id integer,
    name character varying(100) NOT NULL,
    type character varying(50),
    mass_solar_masses numeric(10,4),
    radius_solar_radii numeric(10,4),
    luminosity_solar_luminosities numeric(10,4)
);


ALTER TABLE public.star OWNER TO freecodecamp;

--
-- Name: star_star_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.star_star_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.star_star_id_seq OWNER TO freecodecamp;

--
-- Name: star_star_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.star_star_id_seq OWNED BY public.star.star_id;


--
-- Name: asteroid asteroid_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.asteroid ALTER COLUMN asteroid_id SET DEFAULT nextval('public.asteroid_asteroid_id_seq'::regclass);


--
-- Name: galaxy galaxy_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy ALTER COLUMN galaxy_id SET DEFAULT nextval('public.galaxy_galaxy_id_seq'::regclass);


--
-- Name: moon moon_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon ALTER COLUMN moon_id SET DEFAULT nextval('public.moon_moon_id_seq'::regclass);


--
-- Name: planet planet_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet ALTER COLUMN planet_id SET DEFAULT nextval('public.planet_planet_id_seq'::regclass);


--
-- Name: star star_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star ALTER COLUMN star_id SET DEFAULT nextval('public.star_star_id_seq'::regclass);


--
-- Data for Name: asteroid; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.asteroid VALUES (1, 1, 'Apophis', 0.375, 'Carbonaceous', '2004-06-19', true, 'A near-Earth asteroid that caused a brief period of concern in December 2004 because initial observations indicated a small chance of a future impact with Earth.');
INSERT INTO public.asteroid VALUES (2, 2, 'Bennu', 0.492, 'Carbonaceous', '1999-09-11', false, 'A near-Earth asteroid that is the target of NASAs OSIRIS-REx mission, which aims to return a sample of the asteroid to Earth.');
INSERT INTO public.asteroid VALUES (3, 1, 'Vesta', 525.4, 'Rocky', '1807-03-29', false, 'One of the largest objects in the asteroid belt and the second most massive after Ceres. It has a differentiated interior and a basaltic surface.');
INSERT INTO public.asteroid VALUES (4, 3, 'Ceres', 939.4, 'Rocky/Icy', '1801-01-01', false, 'The largest object in the asteroid belt and classified as a dwarf planet. It has a significant amount of water ice beneath its surface.');
INSERT INTO public.asteroid VALUES (5, 2, 'Eros', 16.84, 'Stony', '1898-08-13', false, 'A near-Earth asteroid that was the first asteroid to be orbited by a spacecraft. It is elongated in shape and has a surface covered with boulders.');
INSERT INTO public.asteroid VALUES (6, 3, 'Psyche', 226, 'Metallic', '1852-03-17', false, 'A large M-type asteroid that is thought to be the exposed metallic core of a protoplanet. It is the target of NASAs Psyche mission set to launch in the 2020s.');
INSERT INTO public.asteroid VALUES (7, 1, 'Ganymed', 32.4, 'Stony', '1924-10-23', false, 'The largest near-Earth asteroid and one of the largest asteroids in the solar system. It has a relatively high albedo and is classified as an S-type asteroid.');


--
-- Data for Name: galaxy; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.galaxy VALUES (1, 'Milky Way', 'The galaxy that contains our Solar System.', true, 13.51, 0, NULL, NULL);
INSERT INTO public.galaxy VALUES (2, 'Andromeda', 'The nearest major galaxy to the Milky Way.', false, 10.00, 2537000, NULL, NULL);
INSERT INTO public.galaxy VALUES (3, 'Triangulum', 'A member of the Local Group of galaxies.', false, 12.00, 3000000, NULL, NULL);
INSERT INTO public.galaxy VALUES (4, 'Sombrero Galaxy', 'A spiral galaxy in the constellation Virgo.', false, 9.00, 29000000, NULL, NULL);
INSERT INTO public.galaxy VALUES (5, 'Whirlpool Galaxy', 'A classic spiral galaxy.', false, 12.00, 23000000, NULL, NULL);
INSERT INTO public.galaxy VALUES (6, 'Pinwheel Galaxy', 'A face-on spiral galaxy.', false, 13.00, 21000000, NULL, NULL);


--
-- Data for Name: moon; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.moon VALUES (1, 1, 'Moon', 'Natural satellite', 0.0123, 0.2730, 27.3217);
INSERT INTO public.moon VALUES (2, 2, 'Phobos', 'Natural satellite', 0.0000, 0.0006, 0.3189);
INSERT INTO public.moon VALUES (3, 2, 'Deimos', 'Natural satellite', 0.0000, 0.0003, 1.2624);
INSERT INTO public.moon VALUES (53, 3, 'Proxima b I', 'Natural satellite', 0.0005, 0.0500, 0.5000);
INSERT INTO public.moon VALUES (54, 4, 'Sombrero Planet 1 I', 'Natural satellite', 0.1000, 1.0000, 10.0000);
INSERT INTO public.moon VALUES (56, 6, 'Pinwheel Planet 1 I', 'Natural satellite', 0.0200, 0.2000, 15.0000);
INSERT INTO public.moon VALUES (57, 7, 'Pinwheel Planet 2 I', 'Natural satellite', 0.1500, 1.5000, 30.0000);
INSERT INTO public.moon VALUES (58, 8, 'Proxima c I', 'Natural satellite', 0.0050, 0.1000, 5.0000);
INSERT INTO public.moon VALUES (64, 1, 'Luna II', 'Natural satellite', 0.0100, 0.2500, 30.0000);
INSERT INTO public.moon VALUES (65, 2, 'Phobos II', 'Natural satellite', 0.0001, 0.0005, 1.0000);
INSERT INTO public.moon VALUES (66, 3, 'Deimos II', 'Natural satellite', 0.0001, 0.0004, 2.0000);
INSERT INTO public.moon VALUES (67, 4, 'Mars I', 'Natural satellite', 0.0002, 0.0007, 3.0000);
INSERT INTO public.moon VALUES (68, 5, 'Mars II', 'Natural satellite', 0.0003, 0.0008, 4.0000);
INSERT INTO public.moon VALUES (69, 6, 'Mars III', 'Natural satellite', 0.0004, 0.0009, 5.0000);
INSERT INTO public.moon VALUES (70, 7, 'Mars IV', 'Natural satellite', 0.0005, 0.0010, 6.0000);
INSERT INTO public.moon VALUES (71, 8, 'Mars V', 'Natural satellite', 0.0006, 0.0011, 7.0000);
INSERT INTO public.moon VALUES (72, 66, 'Mars VII', 'Natural satellite', 0.0008, 0.0013, 9.0000);
INSERT INTO public.moon VALUES (73, 67, 'Mars VIII', 'Natural satellite', 0.0009, 0.0014, 10.0000);
INSERT INTO public.moon VALUES (74, 68, 'Mars IX', 'Natural satellite', 0.0010, 0.0015, 11.0000);
INSERT INTO public.moon VALUES (75, 69, 'Mars X', 'Natural satellite', 0.0011, 0.0016, 12.0000);
INSERT INTO public.moon VALUES (76, 70, 'Mars XI', 'Natural satellite', 0.0012, 0.0017, 13.0000);
INSERT INTO public.moon VALUES (77, 70, 'Mars XII', 'Natural satellite', 0.0013, 0.0018, 14.0000);
INSERT INTO public.moon VALUES (78, 70, 'Mars XIII', 'Natural satellite', 0.0014, 0.0019, 15.0000);
INSERT INTO public.moon VALUES (79, 70, 'Mars XIV', 'Natural satellite', 0.0015, 0.0020, 16.0000);
INSERT INTO public.moon VALUES (80, 70, 'Mars XV', 'Natural satellite', 0.0016, 0.0021, 17.0000);
INSERT INTO public.moon VALUES (81, 70, 'Mars XVI', 'Natural satellite', 0.0017, 0.0022, 18.0000);
INSERT INTO public.moon VALUES (82, 70, 'Mars XVII', 'Natural satellite', 0.0018, 0.0023, 19.0000);


--
-- Data for Name: planet; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.planet VALUES (1, 1, 'Earth', 'Terrestrial', 1.0000, 1.0000, 365.2564, false);
INSERT INTO public.planet VALUES (2, 1, 'Mars', 'Terrestrial', 0.1070, 0.5320, 686.9710, false);
INSERT INTO public.planet VALUES (3, 2, 'Proxima b', 'Terrestrial', 1.2700, NULL, 11.1860, false);
INSERT INTO public.planet VALUES (4, 3, 'Sombrero Planet 1', 'Gas Giant', 318.0000, 11.2000, 4332.5890, false);
INSERT INTO public.planet VALUES (5, 5, 'Whirlpool Planet 1', 'Ice Giant', 17.0000, 4.0000, 30589.0000, false);
INSERT INTO public.planet VALUES (6, 6, 'Pinwheel Planet 1', 'Terrestrial', 0.8150, 0.9490, 224.7010, false);
INSERT INTO public.planet VALUES (7, 6, 'Pinwheel Planet 2', 'Gas Giant', 95.0000, 10.9730, 4332.5890, false);
INSERT INTO public.planet VALUES (8, 2, 'Proxima c', 'Super-Earth', 7.0000, NULL, 1928.0000, false);
INSERT INTO public.planet VALUES (66, 3, 'Sombrero Planet 2', 'Gas Giant', 318.0000, 11.2000, 4332.5890, false);
INSERT INTO public.planet VALUES (67, 5, 'Whirlpool Planet 2', 'Ice Giant', 17.0000, 4.0000, 30589.0000, false);
INSERT INTO public.planet VALUES (68, 6, 'Pinwheel Planet 3', 'Terrestrial', 0.8150, 0.9490, 224.7010, false);
INSERT INTO public.planet VALUES (69, 6, 'Pinwheel Planet 4', 'Gas Giant', 95.0000, 10.9730, 4332.5890, false);
INSERT INTO public.planet VALUES (70, 2, 'Proxima d', 'Super-Earth', 7.0000, NULL, 1928.0000, false);


--
-- Data for Name: star; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.star VALUES (1, 1, 'Sun', 'G-type main-sequence star', 1.0000, 1.0000, 1.0000);
INSERT INTO public.star VALUES (2, 1, 'Proxima Centauri', 'Red dwarf', 0.1230, 0.1542, 0.0017);
INSERT INTO public.star VALUES (3, 2, 'Alpha Andromedae', 'Binary star system', 3.6000, 2.9000, 230.0000);
INSERT INTO public.star VALUES (4, 3, 'Triangulum Star 1', 'Yellow Dwarf', 1.1000, 1.2000, 1.5000);
INSERT INTO public.star VALUES (5, 4, 'Sombrero Star 1', 'Red Giant', 2.5000, 50.0000, 1000.0000);
INSERT INTO public.star VALUES (6, 4, 'Sombrero Star 2', 'White Dwarf', 0.6000, 0.0100, 0.0001);


--
-- Name: asteroid_asteroid_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.asteroid_asteroid_id_seq', 7, true);


--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.galaxy_galaxy_id_seq', 6, true);


--
-- Name: moon_moon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.moon_moon_id_seq', 82, true);


--
-- Name: planet_planet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.planet_planet_id_seq', 74, true);


--
-- Name: star_star_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.star_star_id_seq', 18, true);


--
-- Name: asteroid asteroid_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.asteroid
    ADD CONSTRAINT asteroid_name_key UNIQUE (name);


--
-- Name: asteroid asteroid_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.asteroid
    ADD CONSTRAINT asteroid_pkey PRIMARY KEY (asteroid_id);


--
-- Name: galaxy galaxy_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_pkey PRIMARY KEY (galaxy_id);


--
-- Name: moon moon_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_pkey PRIMARY KEY (moon_id);


--
-- Name: planet planet_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_pkey PRIMARY KEY (planet_id);


--
-- Name: star star_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_pkey PRIMARY KEY (star_id);


--
-- Name: galaxy unique_galaxy_name; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT unique_galaxy_name UNIQUE (name);


--
-- Name: moon unique_moon_name; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT unique_moon_name UNIQUE (name);


--
-- Name: planet unique_planet_name; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT unique_planet_name UNIQUE (name);


--
-- Name: star unique_star_name; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT unique_star_name UNIQUE (name);


--
-- Name: asteroid asteroid_galaxy_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.asteroid
    ADD CONSTRAINT asteroid_galaxy_id_fkey FOREIGN KEY (galaxy_id) REFERENCES public.galaxy(galaxy_id);


--
-- Name: moon moon_planet_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_planet_id_fkey FOREIGN KEY (planet_id) REFERENCES public.planet(planet_id);


--
-- Name: planet planet_star_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_star_id_fkey FOREIGN KEY (star_id) REFERENCES public.star(star_id);


--
-- Name: star star_galaxy_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_galaxy_id_fkey FOREIGN KEY (galaxy_id) REFERENCES public.galaxy(galaxy_id);


--
-- PostgreSQL database dump complete
--
