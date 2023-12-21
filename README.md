# Borealium

This uses [Lume](https://lume.land/docs/overview/about-lume/).

## Dev

```sh
deno task serve
```

All the JSX being red and angry?

```sh
deno cache src/_includes/*.tsx
```

## Site analytics

See [borealium.org@plausible](https://plausible.io/borealium.org) (requires login for the time being).

[Plausible](https://plausible.io/) is fully GDPR compliant, does not track, and is open source.

```sh
for i in $(find . -name "*.ftl")
do
n=$(echo $i |sed -e 's:^\./::' -e 's:/:_slash_:g')
e=${n##*.}
u=${n%.*}
l=${u#*.}
b=${n%%.*}
mkdir locales/$l
mv -v $i locales/$l/$b.$e
done
```

```sh
for i in $(find . -name "*.flt")
do
e=${i##*.}
echo e $e
u=${u%.*}
echo u $u
b=${´n%%.*}
echo b $b
done
```
