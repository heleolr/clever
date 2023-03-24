#!/bin/sh
UUID=${UUID:-'b1a19695-f6e6-442b-bf79-a33298277baf'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
