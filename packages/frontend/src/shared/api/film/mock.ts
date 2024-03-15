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
import { FilmDescription } from "src/widgets/film/DescriptionModule/types";

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

export const DescriptionMock: FilmDescription = {
  ru: {
    text:
        "Тридцать первое октября 2018 года, район Сибуя. Множество простых людей заключены под магической завесой и взяты в заложники союзом проклятых духов под началом [Махито]() и [Гэто](). Всех гражданских обещают выпустить невредимыми только с одним условием: сильнейший маг современности [Сатору Годзё]() должен явиться в Сибую и принять бой.\n" +
        "\n" +
        "Ученики и преподаватели Магического техникума разбиваются на группы, чтобы быстрее эвакуировать мирных жителей перед началом масштабной битвы. Вместе с тем, сам Сатору Годзё прибывает на место действия и отправляется прямиком к станции. События развиваются согласно плану [Сугуру Гэто]().",
    contributor: {
      type: "Автор",
      name: "onaset"
    }
  },
  en: {
    text:
        "The year is 2006, and the halls of Tokyo Prefectural Jujutsu High School echo with the endless bickering and intense debate between two inseparable best friends. Exuding unshakeable confidence, Satoru Gojou and Suguru Getou believe there is no challenge too great for young and powerful Special Grade sorcerers such as themselves. They are tasked with safely delivering a sensible girl named Riko Amanai to the entity whose existence is the very essence of the jujutsu world. However, the mission plunges them into an exhausting swirl of moral conflict that threatens to destroy the already feeble amity between sorcerers and ordinary humans.\n" +
        "\n" +
        "Twelve years later, students and sorcerers are the frontline defense against the rising number of high-level curses born from humans' negative emotions. As the entities grow in power, their self-awareness and ambition increase too. The curses unite for the common goal of eradicating humans and creating a world of only cursed energy users, led by a dangerous, ancient cursed spirit. To dispose of their greatest obstacle—the strongest sorcerer, Gojou—they orchestrate an attack at Shibuya Station on Halloween. Dividing into teams, the sorcerers enter the fight prepared to risk everything to protect the innocent and their own kind.",
    contributor: {
      type: "Источник",
      name: "myanimelist.net"
    }
  }
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
