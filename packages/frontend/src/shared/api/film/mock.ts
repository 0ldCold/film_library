//types
import { FilmStatusDropdownModuleInfo } from "src/widgets/film/FilmStatusDropdownModule/types";
import { StillsModuleInfo } from "src/widgets/film/StillsModule/types";
import { MovieExcerptsModuleInfo } from "src/widgets/film/MovieExcerptsModule/types";
import { RelatedInfo } from "src/widgets/film/RelatedModule/types";
import { MainCharactersModuleInfo } from "src/widgets/film/MainCharactersModule/types";
import { AuthorModuleInfo } from "src/widgets/film/AuthorModule/types";
import { FilmInfo } from "src/widgets/film/InfoModule/types";
import { StudioImgProps } from "src/widgets/film/StudioModule/StudioModule";
import { SimilarModuleInfo } from "src/widgets/film/SimilarModule/types";

//Picture
import MegumiFushiguro from "./mainCharacterPicture/MegumiFushiguro.webp";
import NobaraKugisaki from "./mainCharacterPicture/NobaraKugisaki.webp";
import SatoroDrezo from "./mainCharacterPicture/SatoroDrezo.webp";
import SugurGeto from "./mainCharacterPicture/SugurGeto.webp";
import YujiItadori from "./mainCharacterPicture/YujiItadori.webp";
import frameOne from "./stillsPicture/frameOne.jpg";
import frameTwo from "./stillsPicture/frameTwo.jpg";
import MagicBattleManga from "./relatedPicture/MagicBattleManga.webp";
import MagicBattle from "./relatedPicture/MagicBattle.webp";
import MagicBattle2Recaps from "./relatedPicture/MagicBattle2Recaps.webp";
import MagicBattleDeadlyMigration from "./relatedPicture/MagicBattleDeadlyMigration.webp";
import GegeAvatar from "./authorsPicture/AuthorsGege.webp";
import SetaAvatar from "./authorsPicture/Seta.webp";
import KacyhiroAvatar from "./authorsPicture/Kacyhiro.webp";
import StudioMappa from "./studioPicture/studio.png";
import AManOfChainsaw from "./similarPicture/AManOfChainsaw.webp";
import GirlWhoSeesThis from "./similarPicture/GirlWhoSeesThis.webp";
import GreatOfStrayDogs2 from "./similarPicture/GreatOfStrayDogs2.webp";
import HellsParadise from "./similarPicture/HellsParadise.webp";
import HellsingOVA from "./similarPicture/HellsingOVA.webp";
import JojosIncredibleAdventureGoldenWind from "./similarPicture/JojosIncredibleAdventureGoldenWind.webp";
import NarutoHurricaneChronicles from "./similarPicture/NarutoHurricaneChronicles.webp";
import { Teaser, Trailer } from "./movieExcerptsPicture/mock";
import Gojo from "./movieExcerptsPicture/gojo.jpg";
import GojoAndgeto from "./movieExcerptsPicture/gojoAndgeto.jpg";
import { RateChartInfo } from "src/widgets/film/RateChartModule/types";

export const infoModuleMock: FilmInfo = {
  type: "TV Сериал",
  episodes: {
    current: 21,
    total: 23
  },
  episodeDuration: 23,
  status: "ongoing",
  createFrom: new Date(2023, 6, 6),
  createTo: new Date(2023, 11, 28),
  genres: ["Экшен", "Фэнтези", "Школа", "Сёнен"],
  ageRating: "R-17",
  commentsCount: 27271
};

export const StudioLogoMock: StudioImgProps = {
  logo: StudioMappa.src
};
export const rateModuleMock = 8.9;

export const AuthorModuleMock: AuthorModuleInfo[] = [
  {
    name: "Гэгэ Акутами",
    role: ["Автор оригинала"],
    avatar: GegeAvatar.src
  },
  {
    name: "Акифуми Фудзио",
    role: ["Главный продюсер"]
  },
  {
    name: "Тацуро Хаяси",
    role: ["Главный продюсер"]
  },
  {
    name: "Ацуси Такахаси",
    role: ["Главный продюсер"]
  },
  {
    name: "Кацухиро Такэи",
    role: ["Главный продюсер"],
    avatar: KacyhiroAvatar.src
  },
  {
    name: "Сёта Госёдзоно",
    role: ["Ключевая анимация", "Раскадровка", "Режиссёр", "Режиссёр эпизодов"],
    avatar: SetaAvatar.src
  }
];

const getDateFromYear = (year: number): Date => {
  return new Date(year, 0, 1);
};

export const RelatedModuleMock: RelatedInfo[] = [
  {
    name: "Магическая битва",
    info: "Манга",
    releaseDate: getDateFromYear(2018),
    publisher: "Shounen Jump (Weekly)",
    story: "Адаптация",
    poster: MagicBattleManga.src
  },
  {
    name: "Магическая битва",
    info: "TV Сериал",
    releaseDate: getDateFromYear(2020),
    studio: "MAPPA",
    story: "Предыстория",
    poster: MagicBattle.src
  },
  {
    name: "Магическая битва 2: Рекапы",
    info: "TV Спецвыпуск",
    releaseDate: getDateFromYear(2023),
    studio: "MAPPA",
    story: "Обобщение",
    poster: MagicBattle2Recaps.src
  },
  {
    name: "Магическая битва: Смертельная миграция",
    poster: MagicBattleDeadlyMigration.src
  }
];

export const MainCharactersModuleMock: MainCharactersModuleInfo[] = [
  {
    name: "Мэгуми Фусигуро",
    poster: MegumiFushiguro.src
  },
  {
    name: "Нобара Кугисаки",
    poster: NobaraKugisaki.src
  },
  {
    name: "Сатору Годзё",
    poster: SatoroDrezo.src
  },
  {
    name: "Сугуру Гэто",
    poster: SugurGeto.src
  },
  {
    name: "Юдзи Итадори",
    poster: YujiItadori.src
  }
];

export const FilmStatusDropdownModuleMock: FilmStatusDropdownModuleInfo = {
  status: null
};

export const StillsModuleMock: StillsModuleInfo[] = [
  {
    frame: frameOne.src
  },
  {
    frame: frameTwo.src
  }
];

export const MovieExcerptsModuleMock: MovieExcerptsModuleInfo[] = [
  {
    video: Teaser,
    image: Gojo.src,
    info: "PV1"
  },
  {
    video: Trailer,
    image: GojoAndgeto.src,
    info: "PV1 (Head Pack Films) Озвучка"
  }
];

export const SimilarModuleMock: SimilarModuleInfo[] = [
  {
    name: "Человек-бензопила",
    poster: AManOfChainsaw.src
  },
  {
    name: "Адский рай",
    poster: HellsParadise.src
  },
  {
    name: "Великий из бродячих псов 2",
    poster: GreatOfStrayDogs2.src
  },
  {
    name: "Наруто: Ураганные хроники",
    poster: NarutoHurricaneChronicles.src
  },
  {
    name: "Невероятное приключение ДжоДжо: Золотой ветер",
    poster: JojosIncredibleAdventureGoldenWind.src
  },
  {
    name: "Девочка, которая видит это",
    poster: GirlWhoSeesThis.src
  },
  {
    name: "Хеллсинг OVA",
    poster: HellsingOVA.src
  }
];

export const RateChartModuleMock: RateChartInfo[] = [
  {
    rate: 10,
    count: 9854
  },
  {
    rate: 9,
    count: 7458
  },
  {
    rate: 8,
    count: 6560
  },
  {
    rate: 7,
    count: 2898
  },
  {
    rate: 6,
    count: 1035
  },
  {
    rate: 5,
    count: 402
  }
];
