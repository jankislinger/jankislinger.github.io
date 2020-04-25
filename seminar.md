---
layout: page
title: Seminar
hidden: "yes"
---

## Uvod

* o me - 4 roky ML, pred tim ve financich, vystudovana statistika na MFF
* prehled algoritmu - supervised / unsupervised (s / bez ucitele)
* 2x klasicke algoritmy, 1x neuronky
* validace modelu - trenovaci a testovaci sada
* grafy pouze ilustrativni - neni potreba chapat syntax

### Rstudio

* panely
* instalovani knihoven
* novy projekt
* skript vs konzole
* help (funkce i datasety)


## K-means

### iris

[https://www.r-bloggers.com/k-means-clustering-in-r/](https://www.r-bloggers.com/k-means-clustering-in-r/)

```r
ggplot(iris, aes(Sepal.Length, Sepal.Width, color = Species)) + 
  geom_point()
```

```r
fit <- kmeans(iris[1:2], centers = 3)
fit
```

```r
ggplot(iris, aes(Sepal.Length, Sepal.Width, color = factor(fit$cluster)) + 
  geom_point()
fviz_cluster(fit, iris[1:2])
```

vyzkouset `centers` to 2, 4, 6, 10

```r
fviz_nbclust(iris[, 1:2], kmeans, method = "wss")
fviz_nbclust(iris[, 1:2], kmeans, method = "silhouette")

fviz_nbclust(iris[, 1:4], kmeans, method = "wss")
fviz_nbclust(iris[, 1:4], kmeans, method = "silhouette")
```

[https://en.wikipedia.org/wiki/Silhouette_(clustering)](https://en.wikipedia.org/wiki/Silhouette_(clustering))

### mtcars

```r
scale(mtcars[, c('cyl', 'hp')])
```

### USArrests

[https://uc-r.github.io/kmeans_clustering#kmeans](https://uc-r.github.io/kmeans_clustering#kmeans)


## PCA

[https://www.datacamp.com/community/tutorials/pca-analysis-r](https://www.datacamp.com/community/tutorials/pca-analysis-r)

```r
prcomp(iris[,1:4], center = TRUE, scale. = TRUE)
```

## tree

### iris

```r
require(tree)
require(rpart.plot)

t <- tree(Species ~ ., iris, control = tree.control(nrow(iris), mincut=1, minsize=2, mindev = 0.000001))
t <- tree(Species ~ ., iris)
t

plot(t, uniform=T)
text(t)

text.tree

cv.tree(t, method = 'misclass')


ptitanic <- ptitanic
ptitanic['sex'] <- as.numeric(ptitanic['sex'] == 'female')
ptitanic['pclass'] <- as.numeric(substring(ptitanic['pclass'], 1, 2))

require(tidyverse)

ptitanic <- ptitanic %>% 
  filter(!is.na(age)) %>% 
  mutate(sex = as.numeric(sex == 'female'),
         pclass = substr(pclass, 1, 1))

t <- tree(survived ~ ., ptitanic)
t <- rpart(survived ~ ., ptitanic)
plot(t)
text(t)


cv.tree(t)
01234567890123456789012345678901234567890123456789012345678901234567890123456789
```


## Random Forest

```r
rf <- randomForest(survived ~ ., ptitanic)

importance(rf)

library(caret)
varImp(rf)

```
