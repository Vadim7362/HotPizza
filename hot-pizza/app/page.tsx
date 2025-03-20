import {
  Container,
  Filters,
  // ProductCard,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {/* <ProductCard
                id={0}
                name="Чизбургер пицца"
                price={550}
                imageUrl="https://media.dodostatic.net/image/r:584x584/11ee7d6175c10773bfe36e56d48df7e3.avif"
              /> */}
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: "Чизбургер пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d6175c10773bfe36e56d48df7e3.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d6175c10773bfe36e56d48df7e3.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d6175c10773bfe36e56d48df7e3.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d6175c10773bfe36e56d48df7e3.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d6175c10773bfe36e56d48df7e3.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d6175c10773bfe36e56d48df7e3.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d6175c10773bfe36e56d48df7e3.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d6175c10773bfe36e56d48df7e3.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d6175c10773bfe36e56d48df7e3.avif",
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Завтрак"
                items={[
                  {
                    id: 1,
                    name: "Чизбургер пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d6175c10773bfe36e56d48df7e3.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d6175c10773bfe36e56d48df7e3.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d6175c10773bfe36e56d48df7e3.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d6175c10773bfe36e56d48df7e3.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d6175c10773bfe36e56d48df7e3.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d6175c10773bfe36e56d48df7e3.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d6175c10773bfe36e56d48df7e3.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d6175c10773bfe36e56d48df7e3.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d6175c10773bfe36e56d48df7e3.avif",
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
