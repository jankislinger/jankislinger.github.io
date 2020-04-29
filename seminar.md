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


### Dotazy & pripominky

* poslani kodu predem
* studijni materialy
  * Elements of Stat Learning [https://web.stanford.edu/~hastie/Papers/ESLII.pdf](https://web.stanford.edu/~hastie/Papers/ESLII.pdf)
  * Vignettes [http://www.milbo.org/rpart-plot/prp.pdf](http://www.milbo.org/rpart-plot/prp.pdf)
* ggtree
* jak shrnout vysledky ML algoritmu


## Neural nets

### Iris

```r
library(keras)

x_train <- model.matrix(Species ~ 0 + ., iris)
y_train <- to_categorical(as.integer(iris$Species) - 1, 3)

model <- keras_model_sequential() %>% 
  layer_dense(4, activation = 'softmax', input_shape = c(4)) %>% 
  layer_dense(3, activation = 'softmax')

summary(model)

model %>% compile(
  loss = 'categorical_crossentropy',
  optimizer = optimizer_adam(lr=0.01),
  metrics = c('accuracy'),
)

history <- model %>% fit(
  x_train, y_train, 
  epochs = 300, batch_size = 128
)

get_weights(model)

```

### Mnist conv

```r
library(keras)
mnist <- dataset_mnist()
x_train <- mnist$train$x
y_train <- mnist$train$y
x_test <- mnist$test$x
y_test <- mnist$test$y

x_train <- array_reshape(x_train, c(dim(x_train), 1)) / 255
x_test <- array_reshape(x_test, c(dim(x_test), 1)) / 255

y_train <- to_categorical(y_train, 10)
y_test <- to_categorical(y_test, 10)

dim(x_train)

model <- keras_model_sequential() %>% 
  layer_conv_2d(4, 2, padding='same', activation = 'relu', input_shape = c(28, 28, 1)) %>% 
  layer_max_pooling_2d() %>% 
  layer_conv_2d(8, 2, padding='same', activation = 'relu') %>% 
  layer_max_pooling_2d() %>% 
  layer_conv_2d(12, 2, padding='same', activation = 'relu') %>% 
  layer_max_pooling_2d() %>% 
  layer_flatten() %>% 
  layer_dense(10, activation = 'softmax')
  
summary(model)

model %>% compile(
  loss = 'categorical_crossentropy',
  optimizer = 'adam',
  metrics = c('accuracy')
)

history <- model %>% fit(
  x_train, y_train, 
  epochs = 30, batch_size = 128, 
  validation_split = 0.2
)
```
