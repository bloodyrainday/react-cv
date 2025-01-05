import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/button/Button";
import { Project } from "./project/Project";
import libraryProject from "../../../assets/images/library.png";
import coffeeProject from "../../../assets/images/coffee.png";
import sneakersProject from "../../../assets/images/sneakers.png";
import todolistProject from "../../../assets/images/todolist.png";
import { Container } from "../../../components/Container";
import { S } from "./Projects_Styles";
import React from "react";
import { GridWrapper } from "../../../components/GridWrapper";

export type projectDataPropsType = {
  title: string;
  text: string;
  image: string;
  technologies: string[];
  link: string;
};

const projectData = [
  {
    title: "The Brooklyn Library website",
    text: "The Brooklyn Library website is an inviting digital platform designed for book lovers and coffee enthusiasts alike. Users can log in or sign up to create a personalized account and receive their own digital library card for easy access to exclusive features. Discover a curated seasonal book list, thoughtfully selected to match the mood of each time of year. To enhance your reading experience, the Coffee Shop section offers a delightful selection of coffee, tea, desserts, and cakes.",
    technologies: ["Javascript"],
    image: `${libraryProject}`,
    link: "https://bloodyrainday.github.io/rsschool-cv/library/index.html",
  },
  {
    title: "Coffee Shop",
    text: "Coffee Shop is a warm and inviting space designed for those who appreciate the perfect blend of flavor and comfort. Our menu features a variety of carefully crafted coffees, from bold espressos to creamy lattes, alongside a selection of aromatic teas to suit every mood. Indulge your sweet tooth with our delicious assortment of desserts, including rich cakes, flaky pastries, and delightful treats.",
    technologies: ["Javascript", "React"],
    image: `${coffeeProject}`,
    link: "https://bloodyrainday.github.io/coffee-shop-react/",
  },

  {
    title: "Sneaker Store",
    text: "Sneaker Shop is the ultimate destination for sneaker enthusiasts, offering a wide variety of stylish and exclusive sneakers to match every taste and lifestyle. Create your own profile to track your purchases, manage your preferences, and build your personal sneaker collection. With an intuitive cart system, shopping for your next favorite pair is seamless and enjoyable.",
    technologies: ["Javascript", "React", "SASS"],
    image: `${sneakersProject}`,
    link: "https://bloodyrainday.github.io/react-sneakers/",
  },
  {
    title: "Todo List",
    text: "Todo List is a sleek and intuitive productivity tool designed to help you plan, organize, and conquer your daily tasks with ease. Create a clear roadmap of what needs to be done in the near future, set priorities, and stay on top of your goals. Once tasks are completed, simply drag them to the 'Completed tasks' area for a satisfying sense of accomplishment.",
    technologies: ["Javascript", "React", "SASS", "TypeScript"],
    image: `${todolistProject}`,
    link: "https://bloodyrainday.github.io/react-todo-list/",
  },
];

export const Projects: React.FC = (props) => {
  const [data, setData] = React.useState<Array<projectDataPropsType>>();
  const [isShownAll, setIsShownAll] = React.useState<boolean>(false);

  const clickToShowAll = () => {
    setIsShownAll(true);
  };

  React.useEffect(() => {
    setData(projectData.slice(0, 2));

    if (isShownAll) {
      setData(projectData);
    }
  }, [isShownAll]);
  return (
    <S.Projects id="projects">
      <Container>
        <SectionTitle>Projects</SectionTitle>

        <GridWrapper
          justify="space-between"
          gap="27px"
          gridTemplateColumns="1fr 1fr"
        >
          {data &&
            data.map((item, index) => {
              return <Project key={index} projectData={item} />;
            })}
        </GridWrapper>

        {isShownAll || (
          <Button title="See all projects" callback={clickToShowAll} />
        )}
      </Container>
    </S.Projects>
  );
};
