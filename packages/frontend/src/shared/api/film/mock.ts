import { AuthorModuleInfo } from "src/widgets/film/AuthorModule/types";
import { FilmInfo } from "src/widgets/film/InfoModule/types";
import GegeAvatar from "./authorsPicture/AuthorsGege.webp";
import SetaAvatar from "./authorsPicture/Seta.webp";
import KacyhiroAvatar from "./authorsPicture/Kacyhiro.webp";
import StudioMappa from "./studioPicture/studio.png";
import { StudioImgProps } from "src/widgets/film/StudioModule/StudioModule";
import { RelatedInfo } from "src/widgets/film/RelatedModule/types";
import MagicBattleManga from "./relatedPicture/MagicBattleManga.webp";
import MagicBattle from "./relatedPicture/MagicBattle.webp";
import MagicBattle2Recaps from "./relatedPicture/MagicBattle2Recaps.webp";
import MagicBattleDeadlyMigration from "./relatedPicture/MagicBattleDeadlyMigration.webp";
import { MainCharactersModuleInfo } from "src/widgets/film/MainCharactersModule/types";
import MegumiFushiguro from "./mainCharacterPicture/MegumiFushiguro.webp";
import NobaraKugisaki from "./mainCharacterPicture/NobaraKugisaki.webp";
import SatoroDrezo from "./mainCharacterPicture/SatoroDrezo.webp";
import SugurGeto from "./mainCharacterPicture/SugurGeto.webp";
import YujiItadori from "./mainCharacterPicture/YujiItadori.webp";
import { FilmStatusDropdownModuleInfo } from "src/widgets/film/FilmStatusDropdownModule/types";
import { StillsModuleInfo } from "src/widgets/film/StillsModule/types";
import frameOne from "./stillsPicture/frameOne.jpg";
import frameTwo from "./stillsPicture/frameTwo.jpg";

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

export const StillsMock: StillsModuleInfo[] = [
  {
    frame: frameOne.src
  },
  {
    frame: frameTwo.src
  }
];
